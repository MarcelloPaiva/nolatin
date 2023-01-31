import { ContentTypes } from "../constants/contentTypes"

export default interface Content {
  id: string
  title: string
  description: string
  url?: string
  type?: ContentTypes
  children: Content[]
}
