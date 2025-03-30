import { NextFunction, Request, Response } from 'express'

class UserController {
  constructor() {}

  createUser = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const body = request.body
      console.log('Request body:', body)
      response.status(200).json({
        message: 'Usuário criado com sucesso!',
        data: body
      })
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
