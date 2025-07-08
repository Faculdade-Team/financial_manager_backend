import AccountsPayableModel from './AccountsPayableModel'
import AccountsPayableRepository from './AccountsPayableRepository'

class AccountsPayableService {
  accountsPayableRepository = new AccountsPayableRepository()

  async create(data: AccountsPayableModel): Promise<any> {
    const accountsPayableModel = AccountsPayableModel.create({
      description: data.description,
      category: data.category,
      paymentDate: data.paymentDate,
      paymentMethod: data.paymentMethod,
      status: data.status,
      observations: data.observations,
      userId: data.userId
    })

    const createdAccountsPayable =
      await this.accountsPayableRepository.create(accountsPayableModel)
    return createdAccountsPayable
  }
}

export default AccountsPayableService
