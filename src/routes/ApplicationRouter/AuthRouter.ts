import { Router } from 'express'
import UserRouter from '../../features/User/UserRouter'
import TesteConexaoRouter from '../../features/TesteConexao/TesteConexaoRouter'

class AuthRouter {
  private router: Router
  private userRouter = new UserRouter()
  private testeConexaoRouter = new TesteConexaoRouter()

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.use('/user', this.userRouter.getRouter())
    this.router.use('/teste', this.testeConexaoRouter.getRouter())
  }

  public getRouter() {
    return this.router
  }
}

export default new AuthRouter().getRouter()
