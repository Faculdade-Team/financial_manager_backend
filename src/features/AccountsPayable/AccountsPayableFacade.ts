import AccountsPayableModel from './AccountsPayableModel'
import AccountsPayableService from './AccountsPayableService'
import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'
import { AccountsPayableValidator } from './AccountsPayableValidator'
import AccountsPayableRepository from './AccountsPayableRepository'

class AccountsPayableFacade {
  private service = new AccountsPayableService()
  private logger = new ConsoleLoggerAdapter()
  private repository = new AccountsPayableRepository()

  async create(data: any) {
    AccountsPayableValidator.validateCreate(data)
    const model = AccountsPayableModel.create(data)
    const result = await this.service.create(model)
    this.logger.info(
      `Conta a pagar criada: ${result.description} (${result.category})`
    )
    return result
  }

  async list(userId: number) {
    return await this.repository.findAllByUserId(userId)
  }

  async delete(id: number) {
    const account = await this.repository.findById(id)
    if (!account) {
      throw new Error('Conta a pagar não encontrada')
    }
    await this.service.delete(id)
    this.logger.info(`Conta a pagar deletada: ${account.description}`)
  }

  // Outros métodos podem ser adicionados aqui (pagar, cancelar, etc)
}

export default AccountsPayableFacade
