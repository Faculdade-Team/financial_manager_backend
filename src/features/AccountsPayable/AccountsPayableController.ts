import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'
import AccountsPayableFacade from './AccountsPayableFacade'
import AccountsPayableService from './AccountsPayableService'
import { NextFunction, Request, Response } from 'express'

class AccountsPayableController {
  private facade = new AccountsPayableFacade()

  createAccountsPayable = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const data = { ...request.body, userId: request?.user?.id }
      const result = await this.facade.create(data)
      response.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  list = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const userId = request?.user?.id

      const result = await this.facade.list(userId as number)
      response.status(200).json({
        message: 'Contas a pagar listadas com sucesso',
        data: result
      })
    } catch (error) {
      next(error)
    }
  }

  delete = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params
      const payableId = Number(id)
      await this.facade.delete(payableId)
      response.status(200).json({
        message: 'Conta a pagar deletada com sucesso'
      })
    } catch (error) {
      next(error)
    }
  }
}

export default AccountsPayableController
