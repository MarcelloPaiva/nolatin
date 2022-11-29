import { ContentTypes } from "../constants/contentTypes"

export default interface Content {
  id: string
  edit: boolean
  name: string
  type?: ContentTypes
}
