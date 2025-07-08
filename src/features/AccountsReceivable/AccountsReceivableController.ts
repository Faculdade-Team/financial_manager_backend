import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'
import AccountsReceivableFacade from './AccountsReceivableFacade'
import AccountsReceivableService from './AccountsReceivableService'
import { Request, Response, NextFunction } from 'express'

class AccountsReceivableController {
  private facade = new AccountsReceivableFacade()

  create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = { ...request.body, userId: request?.user?.id }
      const createdAccount = await this.facade.create(data)
      response.status(200).json({
        message: 'contas a receber criada com sucesso!',
        createdAccount
      })
    } catch (error) {
      next(error)
    }
  }
}

export default AccountsReceivableController
