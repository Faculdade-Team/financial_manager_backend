import { Router } from 'express'
import UserController from './UserController'

class UserRouter {
  router: Router
  userController: UserController
  constructor() {
    this.router = Router()
    this.userController = new UserController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/create', this.userController.createUser)
    this.router.post('/login', this.userController.loginUser)
    this.router.get('/profile', this.userController.getProfile)
    this.router.patch('/deposit', this.userController.deposit)
    this.router.patch('/withdraw', this.userController.withdraw)
    this.router.patch('/payment', this.userController.payment)
    this.router.patch('/receive', this.userController.receivePayment)
  }

  getRouter() {
    return this.router
  }
}

export default UserRouter
