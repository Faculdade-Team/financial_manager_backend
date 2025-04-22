import express, { Express } from 'express'
import dotenv from 'dotenv'
import ApplicationRouter from './routes/ApplicationRouter'
import ErrorHandler from './middlewares/ErrorHandler'

dotenv.config()

const app: Express = express()
const cors = require('cors')

// Permitir requisições do frontend
app.use(cors({
  origin: 'http://localhost:4000',
}));

app.use(express.json())

app.use(ApplicationRouter)

app.use(ErrorHandler.handleError)

export default app
