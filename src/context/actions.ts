import Content from "../models/content"
import Section from "../models/section"
import { ContentTypes } from "../constants/contentTypes"

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
  DuplicateSection = "DUPLICATE_SECTION",
  DuplicateContent = "DUPLICATE_CONTENT",
  DeleteNode = "DELETE_NODE",
  DeletePage = "DELETE_PAGE",
  UpdateSection = "UPDATE_SECTION",
  UpdateContent = "UPDATE_CONTENT",
  UpdatePage = "UPDATE_PAGE",
  UpdateType = "UPDATE_TYPE",
  EditNode = "EDIT_NODE",
  CancelNode = "CANCEL_NODE",
  MoveSection = "MOVE_SECTION",
  MoveContent = "MOVE_CONTENT",
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
  [ActionTypes.DuplicateSection]: {
    pageId: string
    sectionId: string
  }
  [ActionTypes.DuplicateContent]: {
    pageId: string
    parentId: string
    sectionId: string
    duplicateId: string
  }
  [ActionTypes.DeleteNode]: {
    pageId: string
    sectionId: string
    id: string
  }
  [ActionTypes.DeletePage]: {
    pageId: string
    sectionId?: string
  }
  [ActionTypes.UpdatePage]: {
    pageId: string
    title: string
    sectionId?: string
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
  [ActionTypes.UpdateType]: {
    pageId: string
    sectionId: string
    id: string
    type: ContentTypes
  }
  [ActionTypes.EditNode]: {
    pageId?: string
    sectionId?: string
    id: string
  }
  [ActionTypes.CancelNode]: {
    pageId?: string
    sectionId?: string
  }
  [ActionTypes.MoveSection]: {
    pageId: string
    sectionId: string
    direction: "up" | "down"
  }
  [ActionTypes.MoveContent]: {
    pageId: string
    parentId: string
    sectionId: string
    id: string
    direction: "up" | "down"
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]
