import { ElementNames } from "../constants/elements"
import Content from "./content"

export default interface Section {
  id: string
  name: string
  element: ElementNames
  children: Content[]
}

export function isSection(object: Section | Content): object is Section {
  return (object as Section).element !== undefined
}
