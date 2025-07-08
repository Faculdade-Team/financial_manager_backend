import UserModel from './UserModel'

export class UserValidator {
  static validateCreate(data: UserModel) {
    if (!data.name || !data.email || !data.password) {
      throw new Error('Nome, email e senha são obrigatórios!')
    }
    console.log('Validando criação de usuário com dados:', data)
    if (data.password !== data.confirmPassword) {
      throw new Error('Senhas estão diferentes!')
    }
  }
}
