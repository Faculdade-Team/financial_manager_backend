import AccountsReceivableService from './AccountsReceivableService'
import { Request, Response, NextFunction } from 'express'

class AccountsReceivableController {
  private accountsReceivableService = new AccountsReceivableService()

  create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = request.body
      Object.assign(data, {
        userId: request?.user?.id
      })
      const createdAccount = await this.accountsReceivableService.create(data)
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
