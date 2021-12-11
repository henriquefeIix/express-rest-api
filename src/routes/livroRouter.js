import express from 'express'
import livroController from '../controllers/livroController'

const router = express.Router()

router.get('/', livroController.list)
router.post('/', livroController.create)
router.put('/:id', livroController.update)
router.get('/:id', livroController.findById)
router.delete('/:id', livroController.delete)

export default router
