import AccountsPayableModel from './AccountsPayableModel'
import AccountsPayableService from './AccountsPayableService'
import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'
import { AccountsPayableValidator } from './AccountsPayableValidator'

class AccountsPayableFacade {
  private service = new AccountsPayableService()
  private logger = new ConsoleLoggerAdapter()

  async create(data: any) {
    AccountsPayableValidator.validateCreate(data)
    const model = AccountsPayableModel.create(data)
    const result = await this.service.create(model)
    this.logger.info(
      `Conta a pagar criada: ${result.description} (${result.category})`
    )
    return result
  }

  //   async list(userId: number) {
  //     return await this.service.listByUser(userId)
  //   }

  // Outros métodos podem ser adicionados aqui (pagar, cancelar, etc)
}

export default AccountsPayableFacade
