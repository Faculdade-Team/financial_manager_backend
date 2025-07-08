import { AuthUtils } from '../../utils/AuthUtils'
import AccountsPayableRepository from '../AccountsPayable/AccountsPayableRepository'
import AccountsReceivableRepository from '../AccountsReceivable/AccountsReceivableRepository'
import UserModel from './UserModel'
import UserRepository from './UserRepository'
import { UserValidator } from './UserValidator'
import { UserWithTokenDecorator } from './UserWithTokenDecorator'

class UserService {
  userRepository = new UserRepository()
  accountsPayableRepository = new AccountsPayableRepository()
  accountsReceivableRepository = new AccountsReceivableRepository()

  createUser = async (user: UserModel) => {
    const createdUser = await this.userRepository.create({
      name: user.name,
      email: user.email,
      password: user.password
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

  async payment(id: number, amount: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado!')

    if (amount > user.balance)
      throw new Error('Saldo insuficiente para pagamento!')
    if (amount <= 0) throw new Error('Valor inválido para pagamento!')

    user.balance -= amount
    await this.userRepository.update(user.id as number, {
      name: user.name,
      email: user.email,
      password: user.password,
      balance: user.balance as number
    })

    return user
  }

  async deletePayment(paymentId: number) {
    const deletedPayment =
      await this.accountsPayableRepository.delete(paymentId)
    return deletedPayment
  }

  async receivePayment(id: number, receivableId: number, amount: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado!')

    if (amount <= 0) throw new Error('Valor inválido para recebimento!')

    user.balance += amount
    await this.userRepository.update(user.id as number, {
      name: user.name,
      email: user.email,
      password: user.password,
      balance: user.balance as number
    })

    // Deleta a conta a receber após o recebimento
    await this.accountsReceivableRepository.delete(receivableId)

    return user
  }
}

export default UserService
