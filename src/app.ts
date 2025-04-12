import express, { Express } from 'express'
import dotenv from 'dotenv'
import ApplicationRouter from './routes/ApplicationRouter'
import ErrorHandler from './middlewares/ErrorHandler'

dotenv.config()

const app: Express = express()

app.use(express.json())

app.use(ApplicationRouter)

app.use(ErrorHandler.handleError)

export default app
