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

  async delete(id: number): Promise<void> {
    await this.accountsPayableRepository.delete(id)
  }
}

export default AccountsPayableService
