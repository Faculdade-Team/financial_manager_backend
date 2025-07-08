import BaseRepository from '../../base/BaseRepository'
import AccountsReceivableModel from './AccountsReceivableModel'

class AccountsReceivableRepository extends BaseRepository<AccountsReceivableModel> {
  constructor() {
    super('accountsReceivable')
  }
}

export default AccountsReceivableRepository
