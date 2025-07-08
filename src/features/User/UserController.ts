import { NextFunction, Request, Response } from 'express'
import UserService from './UserService'

class UserController {
  private userService = new UserService()

  createUser = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const body = request.body

      const createUser = await this.userService.createUser(body)

      response.status(200).json({
        message: 'Usuário criado com sucesso!',
        createUser
      })
    } catch (error) {
      next(error)
    }
  }

  loginUser = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = request.body

      const userWithToken = await this.userService.loginUser(email, password)

      response.status(200).json({
        message: 'Usuário logado com sucesso!',
        user: userWithToken
      })
    } catch (error) {
      next(error)
    }
  }

  getProfile = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      // O id do usuário estará disponível em request.user (setado pelo middleware)
      const userId = request?.user?.id
      const user = await this.userService.getUserById(userId as number)
      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado.' })
      }
      response.status(200).json({ user })
    } catch (error) {
      next(error)
    }
  }

  deposit = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const userId = request?.user?.id
      const { value } = request.body

      if (value <= 0)
        return response
          .status(400)
          .json({ message: 'Valor inválido para depósito.' })

      const updatedUser = await this.userService.deposit(
        userId as number,
        value
      )

      response.status(200).json({
        message: 'Depósito realizado com sucesso!',
        user: updatedUser
      })
    } catch (error) {
      next(error)
    }
  }

  withdraw = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const userId = request?.user?.id
      const { value } = request.body

      if (value <= 0) {
        return response.status(400).json({ message: 'Valor inválido.' })
      }

      const updatedUser = await this.userService.withdraw(
        userId as number,
        value
      )

      response.status(200).json({
        message: 'Saque realizado com sucesso!',
        user: updatedUser
      })
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
