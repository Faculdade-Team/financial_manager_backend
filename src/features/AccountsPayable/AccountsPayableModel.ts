import { AuthUtils } from '../../utils/AuthUtils'

class AccountsPayableModel {
  id?: number
  description: string
  category: string
  paymentDate: string
  paymentMethod: string
  status: string
  observations: string
  userId: number
  value: number

  constructor(data: {
    description: string
    category: string
    paymentDate: string
    paymentMethod: string
    status: string
    observations: string
    userId: number
    value: number
    id?: number
  }) {
    this.id = data.id
    this.description = data.description
    this.category = data.category
    this.paymentDate = data.paymentDate
    this.paymentMethod = data.paymentMethod
    this.status = data.status
    this.observations = data.observations
    this.userId = data.userId
    this.value = data.value
  }

  static create(data: {
    description: string
    category: string
    paymentDate: string
    paymentMethod: string
    status: string
    observations: string
    userId: number
    value: number
    id?: number
  }): AccountsPayableModel {
    if (
      !data.description ||
      !data.category ||
      !data.paymentDate ||
      !data.paymentMethod ||
      !data.status ||
      !data.userId ||
      !data.value
    ) {
      throw new Error(
        'Dados obrigatórios faltando para criar AccountsPayableModel'
      )
    }

    if (data.paymentDate) {
      data.paymentDate = new Date(data.paymentDate).toISOString()
    }

    if (data.value) {
      data.value = Number(data.value)
    }
    return new AccountsPayableModel(data)
  }
}
export default AccountsPayableModel
