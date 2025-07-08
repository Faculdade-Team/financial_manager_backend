import AccountsPayableModel from './AccountsPayableModel'

export class AccountsPayableValidator {
  static validateCreate(data: AccountsPayableModel) {
    if (
      !data.description ||
      !data.category ||
      !data.paymentDate ||
      !data.paymentMethod ||
      !data.status ||
      !data.userId
    ) {
      throw new Error(
        'Todos os campos obrigatórios devem ser preenchidos para contas a pagar!'
      )
    }
  }
}
