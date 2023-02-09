import { ILink } from "./ILink"

export interface IUser {
  _id: string
  name?: string
  email: string
  password?: string
  link: ILink[]
}