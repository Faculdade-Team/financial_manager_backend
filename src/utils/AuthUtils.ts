import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthUtils {
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
  }

  static async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }

  static generateToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '1h'
    })
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, process.env.JWT_SECRET as string)
  }
}
