import AccountsReceivableModel from '../AccountsReceivableModel'

describe('AccountsReceivableModel', () => {
  it('cria uma conta a receber válida', () => {
    const data = {
      description: 'Freela',
      category: 'Serviços',
      receiptDate: '2025-07-31',
      formOfReceipt: 'pix',
      status: 'pending',
      observations: 'Frontend',
      userId: 1
    }
    const model = AccountsReceivableModel.create(data)
    expect(model.description).toBe('Freela')
    expect(model.formOfReceipt).toBe('pix')
  })

  it('lança erro se faltar campos obrigatórios', () => {
    const data = {
      description: '',
      category: '',
      receiptDate: '',
      formOfReceipt: '',
      status: '',
      observations: '',
      userId: undefined as any
    }
    expect(() => AccountsReceivableModel.create(data)).toThrow()
  })
})
