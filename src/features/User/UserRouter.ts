import { Router } from 'express'
import UserController from './UserController'

class UserRouter {
  router: Router
  userController: any
  constructor() {
    this.router = Router()
    this.userController = new UserController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/create', this.userController.createUser)
  }

  getRouter() {
    return this.router
  }
}

export default UserRouter
