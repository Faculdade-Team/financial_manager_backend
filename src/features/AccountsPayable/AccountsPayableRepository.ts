import BaseRepository from '../../base/BaseRepository'
import AccountsPayableModel from './AccountsPayableModel'

class AccountsPayableRepository extends BaseRepository<AccountsPayableModel> {
  constructor() {
    super('accountsPayable')
  }

  async findAllByUserId(userId: number): Promise<AccountsPayableModel[]> {
    // @ts-ignore
    return await this.prisma[this.model].findMany({
      where: { userId }
    })
  }
}

export default AccountsPayableRepository
