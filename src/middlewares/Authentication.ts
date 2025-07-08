import { AuthUtils } from '../utils/AuthUtils'
import { Request, Response, NextFunction } from 'express'

class AuthenticationMiddleware {
  static authenticateJWT(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authHeader = request.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return response.status(401).json({ message: 'Token não fornecido.' })
    }

    const token = authHeader.split(' ')[1]

    try {
      const decoded = AuthUtils.verifyToken(token)
      // Adiciona o payload do token ao request para uso posterior
      request.user = decoded
      next()
    } catch (err) {
      return response.status(401).json({ message: 'Token inválido.' })
    }
  }
}

export default AuthenticationMiddleware
