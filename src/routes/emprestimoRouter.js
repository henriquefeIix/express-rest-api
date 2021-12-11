import express from 'express'
import emprestimoController from '../controllers/emprestimoController'

const router = express.Router()

router.get('/', emprestimoController.list)
router.post('/', emprestimoController.create)
router.put('/:id', emprestimoController.update)
router.get('/:id', emprestimoController.findById)
router.delete('/:id', emprestimoController.delete)

export default router
