import UserModel from '../UserModel'
import { AuthUtils } from '../../../utils/AuthUtils'

jest.mock('../../../utils/AuthUtils', () => ({
  AuthUtils: {
    hashPassword: jest.fn(async (password: string) => `hashed_${password}`)
  }
}))

describe('UserModel', () => {
  it('cria um usuário com senha hash', async () => {
    const user = await UserModel.create('João', 'joao@email.com', '123', '123')
    expect(user.name).toBe('João')
    expect(user.email).toBe('joao@email.com')
    expect(user.password).toBe('hashed_123')
  })

  it('lança erro se as senhas forem diferentes', async () => {
    await expect(
      UserModel.create('João', 'joao@email.com', '123', '456')
    ).rejects.toThrow('Senhas estão diferentes!')
  })
})
