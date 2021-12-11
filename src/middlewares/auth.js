import bcrypt from 'bcrypt'
import { Aluno } from '../database/models'

export default async (req, res, next) => {
  try {
    const { matricula } = req.body
    const aluno = await Aluno.scope('curso').findOne({ where: { matricula } })
    
    if (!aluno) {
      res.status(404).json({ message: `Aluno com matrícula ${matricula} não encontrado.`})
    } else {
      if (aluno && bcrypt.compareSync(req.body.senha, aluno.senha)) {
        req.body.aluno = aluno
        next()
      } else {
        res.status(401).json({ message: 'Verifique suas credenciais e tente novamente.' })
      }
    }
  } catch (error) {
    next(error)
  }
}
