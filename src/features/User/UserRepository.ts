import { User } from '@prisma/client'
import BaseRepository from '../../base/BaseRepository'
import UserModel from './UserModel'

class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super('user')
  }
}

export default UserRepository
