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
}

export default UserController
