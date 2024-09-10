import { ContentTypes } from "../constants/contentTypes"

export default interface Content {
  id: string
  title: string
  description: string
  url?: string
  urlType?: "internal" | "external"
  type?: ContentTypes
  children: Content[]
  draft: boolean
}
