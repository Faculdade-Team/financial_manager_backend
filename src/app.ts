import express, { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from Express + TypeScript + Vite + React!',
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    version: process.env.npm_package_version
  })
})

export default app
