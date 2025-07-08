import AccountsReceivableModel from './AccountsReceivableModel'
import AccountsReceivableRepository from './AccountsReceivableRepository'

class AccountsReceivableService {
  private accountsReceivableRepository = new AccountsReceivableRepository()

  create = async (data: AccountsReceivableModel) => {
    console.log('Creating accounts receivable with data:', data)
    const accountsReceivable = AccountsReceivableModel.create(data)
    return this.accountsReceivableRepository.create(accountsReceivable)
  }
}

export default AccountsReceivableService
