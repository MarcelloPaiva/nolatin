import Content from "../models/content"
import Section from "../models/section"

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum ActionTypes {
  CreatePage = "CREATE_PAGE",
  CreateSection = "CREATE_SECTION",
  CreateContent = "CREATE_CONTENT",
  DeleteNode = "DELETE_NODE",
  UpdateSection = "UPDATE_SECTION",
  UpdateContent = "UPDATE_CONTENT",
  EditNode = "EDIT_NODE",
  CancelNode = "CANCEL_NODE",
}

type Payload = {
  [ActionTypes.CreatePage]: {
    pageId?: string
    sectionId?: string
    title: string
    description: string
  }
  [ActionTypes.CreateSection]: {
    sectionId?: string
    pageId: string
  }
  [ActionTypes.CreateContent]: {
    pageId: string
    parentId: string
    sectionId: string
  }
  [ActionTypes.DeleteNode]: {
    pageId: string
    sectionId: string
    id: string
  }
  [ActionTypes.UpdateSection]: {
    pageId: string
    sectionId: string
    state: Section
  }
  [ActionTypes.UpdateContent]: {
    pageId: string
    sectionId: string
    id: string
    state: Content
  }
  [ActionTypes.EditNode]: {
    pageId: string
    sectionId: string
    id: string
  }
  [ActionTypes.CancelNode]: {
    pageId: string
    sectionId: string
    id: string
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]
