import AccountsReceivableModel from './AccountsReceivableModel'
import AccountsReceivableRepository from './AccountsReceivableRepository'
import { AccountsReceivableValidator } from './AccountsReceivableValidator'

class AccountsReceivableService {
  private accountsReceivableRepository = new AccountsReceivableRepository()

  create = async (data: AccountsReceivableModel) => {
    return this.accountsReceivableRepository.create(data)
  }

  delete = async (id: number) => {
    const account = await this.accountsReceivableRepository.findById(id)
    if (!account) {
      throw new Error('Conta a receber não encontrada')
    }
    return this.accountsReceivableRepository.delete(id)
  }
}

export default AccountsReceivableService
