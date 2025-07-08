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
}

export default AccountsPayableController
