import express from 'express'
import auth from '../middlewares/auth'
import tokenService from '../services/tokenService'
import authorization from '../middlewares/authorization'
import alunoRouter from '../routes/alunoRouter'
import emprestimoRouter from '../routes/emprestimoRouter'
import livroRouter from '../routes/livroRouter'

const router = express.Router()

router.use('/alunos', authorization, alunoRouter)
router.use('/emprestimos', authorization, emprestimoRouter)
router.use('/livros', authorization, livroRouter)

router.post('/authenticate', auth, (req, res, next) => {
  const { aluno } = req.body
  const token = tokenService.encode(aluno.id, aluno.matricula)
  res.status(200).json({ aluno, token })
})

router.use((req, res, next) => {
  res.status(404).json({ message: 'A rota solicitada não foi encontrada.' })
})

router.use((err, req, res, next) => {
  res.status(500).json({ message: 'Ocorreu um erro interno do servidor.' })
})

export default router
