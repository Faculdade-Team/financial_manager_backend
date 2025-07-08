import AccountsPayableModel from '../AccountsPayableModel'

describe('AccountsPayableModel', () => {
  it('cria uma conta a pagar válida', () => {
    const data = {
      description: 'Internet',
      category: 'Utilities',
      paymentDate: '2025-07-24',
      paymentMethod: 'boleto',
      status: 'pending',
      observations: 'mensal',
      userId: 1
    }
    const model = AccountsPayableModel.create(data)
    expect(model.description).toBe('Internet')
    expect(model.paymentMethod).toBe('boleto')
  })

  it('lança erro se faltar campos obrigatórios', () => {
    const data = {
      description: '',
      category: '',
      paymentDate: '',
      paymentMethod: '',
      status: '',
      observations: '',
      userId: undefined as any
    }
    expect(() => AccountsPayableModel.create(data)).toThrow()
  })
})
