import express from 'express'
import alunoController from '../controllers/alunoController'

const router = express.Router()

router.get('/', alunoController.list)
router.post('/', alunoController.create)
router.put('/:id', alunoController.update)
router.get('/:id', alunoController.findById)
router.delete('/:id', alunoController.delete)

export default router
