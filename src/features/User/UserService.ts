import { AuthUtils } from '../../utils/AuthUtils'
import UserModel from './UserModel'
import UserRepository from './UserRepository'

class UserService {
  userRepository = new UserRepository()

  createUser = async (user: UserModel) => {
    if (user.password !== user.confirmPassword)
      throw new Error('Senhas estão diferentes!')

    const hashedPassword = await AuthUtils.hashPassword(user.password)

    const userModel = new UserModel(
      user.name,
      user.email,
      hashedPassword,
      user.phone
    )

    const createdUser = await this.userRepository.create(userModel)
    return createdUser
  }
}

export default UserService
