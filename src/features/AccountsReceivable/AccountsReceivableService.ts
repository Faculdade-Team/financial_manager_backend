import AccountsReceivableModel from './AccountsReceivableModel'
import AccountsReceivableRepository from './AccountsReceivableRepository'
import { AccountsReceivableValidator } from './AccountsReceivableValidator'

class AccountsReceivableService {
  private accountsReceivableRepository = new AccountsReceivableRepository()

  create = async (data: AccountsReceivableModel) => {
    return this.accountsReceivableRepository.create(data)
  }
}

export default AccountsReceivableService
