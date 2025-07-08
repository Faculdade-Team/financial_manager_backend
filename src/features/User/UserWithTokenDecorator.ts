import { AuthUtils } from '../../utils/AuthUtils'
import UserModel from './UserModel'

export class UserWithTokenDecorator {
  user: UserModel
  token: string

  constructor(user: UserModel) {
    this.user = user
    this.token = AuthUtils.generateToken({ id: user.id, email: user.email })
  }
}
