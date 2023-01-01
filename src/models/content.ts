import { ContentTypes } from "../constants/contentTypes"

export default interface Content {
  id: string
  edit: boolean
  title?: string
  description?: string
  type?: ContentTypes
  children: Content[]
}
