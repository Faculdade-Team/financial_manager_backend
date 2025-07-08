import { AuthUtils } from '../../utils/AuthUtils'
import UserModel from './UserModel'
import UserRepository from './UserRepository'
import { UserWithTokenDecorator } from './UserWithTokenDecorator'

class UserService {
  userRepository = new UserRepository()

  createUser = async (user: any) => {
    const userModel = await UserModel.create(
      user.name,
      user.email,
      user.password,
      user.confirmPassword
    )

    const createdUser = await this.userRepository.create({
      name: userModel.name,
      email: userModel.email,
      password: userModel.password
    })
    return createdUser
  }

  loginUser = async (email: string, password: string) => {
    const user = await this.userRepository.findByEmail(email)
    if (!user) throw new Error('Usuário não encontrado!')

    const isPasswordValid = await AuthUtils.comparePasswords(
      password,
      user.password
    )
    if (!isPasswordValid) throw new Error('Senha inválida!')

    // Decora o usuário com o token
    return new UserWithTokenDecorator({
      id: user.id as number,
      name: user.name,
      email: user.email,
      password: user.password
    })
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado!')
    return user
  }

  async deposit(id: number, amount: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado!')

    user.balance += amount
    await this.userRepository.update(user.id as number, {
      name: user.name,
      email: user.email,
      password: user.password,
      balance: user.balance as number
    })

    return user
  }

  async withdraw(id: number, amount: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado!')

    if (amount > user.balance) throw new Error('Saldo insuficiente para saque!')
    if (amount <= 0) throw new Error('Valor inválido para saque!')

    user.balance -= amount
    await this.userRepository.update(user.id as number, {
      name: user.name,
      email: user.email,
      password: user.password,
      balance: user.balance as number
    })

    return user
  }
}

export default UserService
