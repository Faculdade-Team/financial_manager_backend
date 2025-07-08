import { AuthUtils } from '../../utils/AuthUtils'

class UserModel {
  id?: number
  name: string
  email: string
  password: string
  balance?: number
  confirmPassword?: string

  constructor(
    name: string,
    email: string,
    password: string,
    balance?: number,
    id?: number,
    confirmPassword?: string
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.balance = balance
    this.confirmPassword = confirmPassword
  }

  static async create(
    name: string,
    email: string,
    password: string,
    confirmPassword?: string
  ): Promise<UserModel> {
    if (password !== confirmPassword) {
      throw new Error('Senhas estão diferentes!')
    }
    const hashedPassword = await AuthUtils.hashPassword(password)
    return new UserModel(name, email, hashedPassword)
  }
}

export default UserModel
