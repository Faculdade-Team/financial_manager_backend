import { Router } from 'express'
import UserRouter from '../../features/User/UserRouter'
import TesteConexaoRouter from '../../features/TesteConexao/TesteConexaoRouter'
import AccountsPayableRouter from '../../features/AccountsPayable/AccountsPayableRouter'
import AccountsReceivableRouter from '../../features/AccountsReceivable/AccountsReceivableRouter'

class AuthRouter {
  private router: Router
  private userRouter = new UserRouter()
  private testeConexaoRouter = new TesteConexaoRouter()
  private accountsPayableRouter = new AccountsPayableRouter()
  private accountsReceivableRouter = new AccountsReceivableRouter()

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.use('/users', this.userRouter.getRouter())
    this.router.use('/accounts-payable', this.accountsPayableRouter.getRouter())
    this.router.use('/teste', this.testeConexaoRouter.getRouter())
    this.router.use(
      '/accounts-receivable',
      this.accountsReceivableRouter.getRouter()
    )
  }

  public getRouter() {
    return this.router
  }
}

export default new AuthRouter().getRouter()
