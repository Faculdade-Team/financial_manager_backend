import AccountsReceivableModel from './AccountsReceivableModel'
import { AccountsReceivableValidator } from './AccountsReceivableValidator'
import AccountsReceivableService from './AccountsReceivableService'
import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'
import AccountsReceivableRepository from './AccountsReceivableRepository'

class AccountsReceivableFacade {
  private service = new AccountsReceivableService()
  private logger = new ConsoleLoggerAdapter()
  private repository = new AccountsReceivableRepository()

  async create(data: any) {
    AccountsReceivableValidator.validateCreate(data)
    const model = AccountsReceivableModel.create(data)
    const createdAccount = await this.service.create(model)
    this.logger.info(
      `Conta a receber criada: ${createdAccount.description} (${createdAccount.category})`
    )
    return createdAccount
  }

  async list(userId: number) {
    return await this.repository.findAllByUserId(userId)
  }

  async delete(id: number) {
    const account = await this.repository.findById(id)
    if (!account) {
      throw new Error('Conta a receber não encontrada')
    }
    await this.service.delete(id)
    this.logger.info(`Conta a receber deletada: ${account.description}`)
  }

  // Você pode adicionar outros métodos (listar, atualizar, etc) aqui
}

export default AccountsReceivableFacade
