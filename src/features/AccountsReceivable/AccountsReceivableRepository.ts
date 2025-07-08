import BaseRepository from '../../base/BaseRepository'
import AccountsReceivableModel from './AccountsReceivableModel'

class AccountsReceivableRepository extends BaseRepository<AccountsReceivableModel> {
  constructor() {
    super('accountsReceivable')
  }

  async findAllByUserId(userId: number): Promise<AccountsReceivableModel[]> {
    // @ts-ignore
    return await this.prisma[this.model].findMany({
      where: { userId }
    })
  }
}

export default AccountsReceivableRepository
