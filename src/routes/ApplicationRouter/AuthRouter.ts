import { Router } from 'express'
import UserRouter from '../../features/User/UserRouter'

class AuthRouter {
  private router: Router
  private userRouter = new UserRouter()

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.use('/user', this.userRouter.getRouter())
  }

  public getRouter() {
    return this.router
  }
}

export default new AuthRouter().getRouter()
