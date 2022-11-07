import { Roles } from "./roles"

export default interface Story {
  name: string
  description: string
  role: Roles
  expectation: string
}
