import { PrismaClient } from '@prisma/client'
import app from './app'

const PORT = process.env.PORT || 3000

const prisma = new PrismaClient()

async function startServer() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error)
    process.exit(1)
  }
}

startServer()
