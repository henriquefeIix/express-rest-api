import { Aluno, Curso } from '../database/models'

export default {

  list: async (req, res, next) => {
    try {
      const alunos = await Aluno.findAll({
        attributes: { exclude: ['curso_id'] },
        include: [{
          model: Curso,
          as: 'curso'
        }]
      })
      res.status(200).json({ alunos })
    } catch (error) {
      next(error)
    }
  },

  create: async (req, res, next) => {
    try {
      const aluno = await Aluno.create(req.body)
      res.status(201).json({ aluno })
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const aluno = await Aluno.findOne({ where: { id } })

      if (!aluno) {
        res.status(404).json({ message: `Aluno com id ${id} não encontrado.`})
      } else {
        const alunoAtualizado = await aluno.update(req.body)
        res.status(200).json({ aluno: alunoAtualizado })
      }
    } catch (error) {
      next(error)
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params
      const aluno = await Aluno.findOne({
        where: { id },
        attributes: { exclude: ['curso_id'] },
        include: [{
          model: Curso,
          as: 'curso'
        }]
      })
        
      if (!aluno) {
        res.status(404).json({ message: `Aluno com id ${id} não encontrado.` })
      } else {
        res.status(200).json({ aluno })
      }
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params
      const aluno = await Aluno.findOne({ where: { id } })

      if (!aluno) {
        res.status(404).json({ message: `Aluno com id ${id} não encontrado.` })
      } else {
        const alunoExcluido = await aluno.destroy()
        res.sendStatus(204)
      }
    } catch (error) {
      next(error)
    }
  }

}
