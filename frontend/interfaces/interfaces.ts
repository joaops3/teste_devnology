export interface IUser {
  first_name: string
  last_name: string
  date_of_birth: string
  type_document: string
  document: string
  identity_document: string
  mothers_name: string
  genre: string
  phone?: number
  mobile: number
  email: string
  password?: string
}

export interface IAdress {
  zip_code: number
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
}