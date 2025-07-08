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

    this.router.get('/list', this.accountsPayableController.list)
    this.router.delete('/delete/:id', this.accountsPayableController.delete)
  }

  getRouter() {
    return this.router
  }
}

export default AccountsPayableRouter
