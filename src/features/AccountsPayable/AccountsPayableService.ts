import AccountsPayableModel from './AccountsPayableModel'
import AccountsPayableRepository from './AccountsPayableRepository'
import { AccountsPayableValidator } from './AccountsPayableValidator'

class AccountsPayableService {
  accountsPayableRepository = new AccountsPayableRepository()

  async create(data: AccountsPayableModel): Promise<any> {
    const createdAccountsPayable =
      await this.accountsPayableRepository.create(data)
    return createdAccountsPayable
  }
}

export default AccountsPayableService
