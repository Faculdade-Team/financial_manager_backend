import AccountsReceivableModel from './AccountsReceivableModel'

export class AccountsReceivableValidator {
  static validateCreate(data: AccountsReceivableModel) {
    if (
      !data.description ||
      !data.category ||
      !data.receiptDate ||
      !data.formOfReceipt ||
      !data.status ||
      !data.userId
    ) {
      throw new Error(
        'Todos os campos obrigatórios devem ser preenchidos para contas a receber!'
      )
    }
  }
}
