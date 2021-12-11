import { Aluno, Emprestimo, Livro } from '../database/models'

export default {

  list: async (req, res, next) => {
    try {
      const emprestimos = await Emprestimo.findAll({
        attributes: { exclude: ['aluno_id'] },
        include: [{
          model: Aluno,
          as: 'aluno'
        }, {
          model: Livro,
          as: 'livros',
          through: { attributes: [] }
        }]
      })
      res.status(200).json({ emprestimos })
    } catch (error) {
      next(error)
    }
  },

  create: async (req, res, next) => {
    try {
      const { livros } = req.body
      const emprestimo = await Emprestimo.create(req.body)
      const emprestimoAtualizado = await emprestimo.setLivros(livros)
      res.status(201).json({ emprestimo })
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const emprestimo = await Emprestimo.findOne({
        where: { id },
        attributes: { exclude: ['aluno_id'] },
        include: [{
          model: Aluno,
          as: 'aluno'
        }, {
          model: Livro,
          as: 'livros',
          through: {
            as: 'devolucao',
            attributes: []
          }
        }]
      })

      if (!emprestimo) {
        res.status(404).json({ message: `Empréstimo com id ${id} não encontrado.` })
      } else {
        const emprestimoAtualizado = await emprestimo.addLivros(req.body.livros, {
          through: { data_devolucao: new Date() }
        })
        res.status(200).json({ emprestimo: emprestimo })
      }
    } catch (error) {
      next(error)
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params
      const emprestimo = await Emprestimo.findOne({
        where: { id },
        attributes: { exclude: ['aluno_id'] },
        include: [{
          model: Aluno,
          as: 'aluno'
        }, {
          model: Livro,
          as: 'livros',
          through: {
            as: 'devolucao',
            attributes: ['data_devolucao']
          }
        }]
      })

      if (!emprestimo) {
        res.status(404).json({ message: `Empréstimo com id ${id} não encontrado.` })
      } else {
        res.status(200).json({ emprestimo })
      }
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params
      const emprestimo = await Emprestimo.findOne({ where: { id } })
        
      if (!emprestimo) {
        res.status(404).json({ message: `Empréstimo com id ${id} não encontrado.` })
      } else {
        const emprestimoExcluido = emprestimo.destroy()
        res.sendStatus(204)
      }
    } catch (error) {
      next(error)
    }
  }

}
