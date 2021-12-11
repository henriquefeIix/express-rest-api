import morgan from 'morgan'
import express from 'express'
import cors from './src/middlewares/cors'
import router from './src/routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors)
app.use('/api/v1', router)

app.listen(3000, () => {
  console.log('O servidor está escutando na porta 3000.')
})

export default app
