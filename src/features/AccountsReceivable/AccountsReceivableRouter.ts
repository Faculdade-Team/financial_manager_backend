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
    this.router.get('/list', this.accountsReceivableController.list)
    this.router.delete('/delete/:id', this.accountsReceivableController.delete)
  }

  getRouter() {
    return this.router
  }
}

export default AccountsReceivableRouter
