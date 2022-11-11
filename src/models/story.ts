import { ElementNames } from "../constants/elements"

export default interface Story {
  edit: boolean
  name: string
  description: string
  element: ElementNames
  action: string
}
