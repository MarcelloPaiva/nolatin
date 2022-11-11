import { Role } from "./roles"

export default interface Element {
  name: string
  tag: string
  roles: Array<Role>
}
