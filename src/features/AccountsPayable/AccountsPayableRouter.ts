import { Router } from 'express'
import AccountsPayableController from './AccountsPayableController'

class AccountsPayableRouter {
  router: Router
  accountsPayableController: AccountsPayableController
  constructor() {
    this.router = Router()
    this.accountsPayableController = new AccountsPayableController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post(
      '/create',
      this.accountsPayableController.createAccountsPayable
    )
  }

  getRouter() {
    return this.router
  }
}

export default AccountsPayableRouter
