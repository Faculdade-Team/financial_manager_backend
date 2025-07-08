import { Router } from 'express'
import AccountsReceivableController from './AccountsReceivableController'

class AccountsReceivableRouter {
  router: Router
  accountsReceivableController: AccountsReceivableController
  constructor() {
    this.router = Router()
    this.accountsReceivableController = new AccountsReceivableController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/create', this.accountsReceivableController.create)
  }

  getRouter() {
    return this.router
  }
}

export default AccountsReceivableRouter
