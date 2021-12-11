import tokenService from '../services/tokenService'

export default async (req, res, next) => {
  if (req.headers.token) {
    try {
      const aluno = await tokenService.decode(req.headers.token)
      if (aluno) {
        next()
      } else {
        res.status(403).json({ message: 'O acesso não foi permitido.' })
      }
    } catch (error) {
      next(error)
    }
  } else {
    res.status(401).json({ message: 'O token de acesso não foi informado.' })
  }
}
