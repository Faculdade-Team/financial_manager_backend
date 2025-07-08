import AccountsReceivableModel from './AccountsReceivableModel'
import { AccountsReceivableValidator } from './AccountsReceivableValidator'
import AccountsReceivableService from './AccountsReceivableService'
import { ConsoleLoggerAdapter } from '../../utils/ConsoleLoggerAdapter'

class AccountsReceivableFacade {
  private service = new AccountsReceivableService()
  private logger = new ConsoleLoggerAdapter()

  async create(data: any) {
    AccountsReceivableValidator.validateCreate(data)
    const model = AccountsReceivableModel.create(data)
    const createdAccount = await this.service.create(model)
    this.logger.info(
      `Conta a receber criada: ${createdAccount.description} (${createdAccount.category})`
    )
    return createdAccount
  }

  // Você pode adicionar outros métodos (listar, atualizar, etc) aqui
}

export default AccountsReceivableFacade
