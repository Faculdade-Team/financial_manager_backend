import { PrismaClient } from '@prisma/client'

abstract class BaseRepository<T> {
  protected prisma: PrismaClient
  protected model: keyof PrismaClient

  constructor(model: keyof PrismaClient) {
    this.prisma = new PrismaClient()
    this.model = model
  }

  // Método genérico para encontrar todos os registros
  async findAll(): Promise<any[]> {
    // @ts-ignore
    return await this.prisma[this.model].findMany()
  }

  // Método genérico para encontrar um registro por ID
  async findById(id: number): Promise<any | null> {
    // @ts-ignore
    return await this.prisma[this.model].findUnique({
      where: { id }
    })
  }

  // Método genérico para criar um registro
  async create(data: T): Promise<any> {
    // @ts-ignore
    return await this.prisma[this.model].create({
      data
    })
  }

  // Método genérico para atualizar um registro
  async update(id: number, data: T): Promise<any> {
    // @ts-ignore
    return await this.prisma[this.model].update({
      where: { id },
      data
    })
  }

  // Método genérico para deletar um registro
  async delete(id: number): Promise<any> {
    // @ts-ignore
    return await this.prisma[this.model].delete({
      where: { id }
    })
  }
}

export default BaseRepository
