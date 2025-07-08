import BaseRepository from '../../base/BaseRepository'
import AccountsPayableModel from './AccountsPayableModel'

class AccountsPayableRepository extends BaseRepository<AccountsPayableModel> {
  constructor() {
    super('accountsPayable')
  }
}

export default AccountsPayableRepository
