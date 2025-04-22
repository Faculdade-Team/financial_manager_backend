import { Router } from 'express'
import TesteConexao from './TesteConexao'

class TesteConexaoRouter {
  router: Router
  testeConexao: TesteConexao
  constructor() {
    this.router = Router()
    this.testeConexao = new TesteConexao()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get('/ping', this.testeConexao.ping)
  }

  getRouter() {
    return this.router
  }
}

export default TesteConexaoRouter
