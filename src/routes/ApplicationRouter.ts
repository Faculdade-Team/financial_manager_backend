import { Router } from 'express'
import UnauthRouter from './ApplicationRouter/UnauthRouter'
import AuthRouter from './ApplicationRouter/AuthRouter'

class ApplicationRouter {
  private router: Router

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.use('/unauth', UnauthRouter)
    this.router.use('/auth', AuthRouter)
  }

  public getRouter() {
    return this.router
  }
}

export default new ApplicationRouter().getRouter()
