import express, { Express } from 'express'
import dotenv from 'dotenv'
import ApplicationRouter from './routes/ApplicationRouter'

dotenv.config()

const app: Express = express()

app.use(express.json())

app.use(ApplicationRouter)

export default app
