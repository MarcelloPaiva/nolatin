import { ElementNames } from "../constants/elements"
import Content from "./content"

export default interface Section {
  id: string
  edit: boolean
  name: string
  element: ElementNames
  content: Content[]
}
