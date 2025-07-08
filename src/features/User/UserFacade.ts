import UserModel from './UserModel'
import { UserValidator } from './UserValidator'
import UserService from './UserService'
import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'

class UserFacade {
  private service = new UserService()
  private logger = new ConsoleLoggerAdapter()

  async createUser(data: any) {
    UserValidator.validateCreate(data)
    const userModel = await UserModel.create(
      data.name,
      data.email,
      data.password,
      data.confirmPassword
    )
    const createdUser = await this.service.createUser(userModel)
    this.logger.info(
      `Usuário criado: ${createdUser.name} (${createdUser.email})`
    )
    return createdUser
  }

  async loginUser(email: string, password: string) {
    const userWithToken = await this.service.loginUser(email, password)
    this.logger.info(`Usuário logado: ${email}`)
    return userWithToken
  }

  async getProfile(userId: number) {
    const user = await this.service.getUserById(userId)
    if (!user) {
      this.logger.error(`Usuário não encontrado: ${userId}`)
      throw new Error('Usuário não encontrado.')
    }
    return user
  }

  async deposit(userId: number, value: number) {
    const updatedUser = await this.service.deposit(userId, value)
    this.logger.info(`Depósito realizado para usuário ${userId}: R$${value}`)
    return updatedUser
  }

  async withdraw(userId: number, value: number) {
    const updatedUser = await this.service.withdraw(userId, value)
    this.logger.info(`Saque realizado para usuário ${userId}: R$${value}`)
    return updatedUser
  }

  async payment(userId: number, paymentId: number, value: number) {
    const updatedUser = await this.service.payment(userId, value)
    await this.service.deletePayment(paymentId)
    this.logger.info(`Pagamento realizado para usuário ${userId}: R$${value}`)
    return updatedUser
  }

  async receivePayment(userId: number, receivableId: number, value: number) {
    const updatedUser = await this.service.receivePayment(
      userId,
      receivableId,
      value
    )
    this.logger.info(`Pagamento recebido para usuário ${userId}: R$${value}`)
    return updatedUser
  }
}

export default UserFacade
