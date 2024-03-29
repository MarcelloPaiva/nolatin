import { ElementNames } from "../constants/elements"
import Content from "./content"

export default interface Section {
  id: string
  name: string
  description: string
  element: ElementNames
  children: Content[]
  draft: boolean
}

export function isSection(object: Section | Content): object is Section {
  return (object as Section).element !== undefined
}
