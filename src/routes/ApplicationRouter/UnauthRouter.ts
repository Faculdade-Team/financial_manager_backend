import { Router } from 'express'
import UserRouter from '../../features/User/UserRouter'

class UnauthRouter {
  private router: Router
  private userRouter: UserRouter

  constructor() {
    this.router = Router()
    this.userRouter = new UserRouter()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.use('/users', this.userRouter.getRouter())
  }

  public getRouter() {
    return this.router
  }
}

export default new UnauthRouter().getRouter()
