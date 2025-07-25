import { Request, Response, NextFunction } from 'express'

class ErrorHandler {
  public static handleError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
      error: {
        message,
        statusCode
      }
    })
  }
}

export default ErrorHandler
