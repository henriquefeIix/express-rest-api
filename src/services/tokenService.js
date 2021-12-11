import jwt from 'jsonwebtoken'
import { Aluno } from '../database/models'

export default {
  encode: (id, matricula) => {
    const tokenKey = process.env.TOKEN_KEY || 'token'
    return jwt.sign({ id, matricula }, tokenKey, { expiresIn: '1d' })
  },

  decode: async (token) => {
    try {
      const tokenKey = process.env.TOKEN_KEY || 'token'
      const { id } = jwt.verify(token, tokenKey)
      return await Aluno.findOne({ where: { id } })
    } catch (error) {
      throw new Error('O token de acesso informado é invalido.')
    }
  }
}
