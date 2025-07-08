import BaseRepository from '../../base/BaseRepository'
import UserModel from './UserModel'

class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super('user')
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email }
    })
    return user
  }
}

export default UserRepository
