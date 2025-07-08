class AccountsReceivableModel {
  id?: number
  description: string
  category: string
  receiptDate: string
  formOfReceipt: string
  status: string
  observations: string
  userId: number
  value: number

  constructor(data: {
    description: string
    category: string
    receiptDate: string
    formOfReceipt: string
    status: string
    observations: string
    userId: number
    value: number
    id?: number
  }) {
    this.id = data.id
    this.description = data.description
    this.category = data.category
    this.receiptDate = data.receiptDate
    this.formOfReceipt = data.formOfReceipt
    this.status = data.status
    this.observations = data.observations
    this.userId = data.userId
    this.value = data.value
  }

  static create(data: {
    description: string
    category: string
    receiptDate: string
    formOfReceipt: string
    status: string
    observations: string
    userId: number
    value: number
    id?: number
  }): AccountsReceivableModel {
    if (
      !data.description ||
      !data.category ||
      !data.receiptDate ||
      !data.formOfReceipt ||
      !data.status ||
      !data.userId ||
      !data.value
    ) {
      throw new Error(
        'Dados obrigatórios faltando para criar AccountsReceivableModel'
      )
    }

    if (data.receiptDate) {
      data.receiptDate = new Date(data.receiptDate).toISOString()
    }

    if (data.value) {
      data.value = Number(data.value)
    }
    return new AccountsReceivableModel(data)
  }
}

export default AccountsReceivableModel
