import { Autor, Livro } from '../database/models'

export default {

  list: async (req, res, next) => {
    try {
      const livros = await Livro.findAll({
        include: [{
          model: Autor,
          as: 'autores'
        }]
      })
      res.status(200).json({ livros })
    } catch (error) {
      next(error)
    }
  },

  create: async (req, res, next) => {
    try {
      const { autores } = req.body
      const livro = await Livro.create(req.body)
      const livroAtualizado = await livro.setAutores(autores)
      res.status(201).json({ livro })
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const { autores } = req.body
      const livro = await Livro.findOne({ where: { id } })

      if (!livro) {
        res.status(404).json({ message: `Livro com id ${id} não encontrado.` })
      } else {
        const livroAtualizado = await livro.update(req.body)
        await livroAtualizado.setAutores(autores)
        res.status(200).json({ livro: livroAtualizado })
      }
    } catch (error) {
      next(error)
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params
      const livro = await Livro.findOne({
        where: { id },
        include: [{
          model: Autor,
          as: 'autores',
          through: { attributes: [] }
        }]
      })
        
      if (!livro) {
        res.status(404).json({ message: `Livro com id ${id} não encontrado.` })
      } else {
        res.status(200).json({ livro })
      }
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params 
      const livro = await Livro.findOne({ where: { id } })

      if (!livro) {
        res.status(404).json({ message: `Livro com id ${id} não encontrado.` })
      } else {
        const livroExcluido = await livro.destroy()
        res.sendStatus(204)
      }
    } catch (error) {
      next(error)
    }
  }

}
