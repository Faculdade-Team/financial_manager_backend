class UserModel {
  name: string
  email: string
  password: string
  confirmPassword?: string
  phone: string

  constructor(
    name: string,
    email: string,
    password: string,
    phone: string,
    confirmPassword?: string
  ) {
    this.name = name
    this.email = email
    this.password = password
    this.phone = phone
    this.confirmPassword = confirmPassword
  }
}

export default UserModel
