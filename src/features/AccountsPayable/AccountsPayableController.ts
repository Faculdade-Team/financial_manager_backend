import AccountsPayableService from './AccountsPayableService'
import { NextFunction, Request, Response } from 'express'

class AccountsPayableController {
  private accountsPayableService = new AccountsPayableService()

  createAccountsPayable = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      console.log('ta vindo aqui?')
      const data = request.body
      Object.assign(data, {
        userId: request?.user?.id
      })
      const accountsPayable = await this.accountsPayableService.create(data)
      response.status(201).json(accountsPayable)
    } catch (error) {
      next(error)
    }
  }
}

export default AccountsPayableController
