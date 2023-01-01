import { AppContextState } from "./AppContext"
import { Actions, ActionTypes } from "./actions"
import { v4 as uuid } from "uuid"
import { clone } from "../utilities/arrayUtilities"
import { ElementNames } from "../constants/elements"
import Content from "../models/content"

export default function appReducer(state: AppContextState, action: Actions) {
  const pages = clone(state.pages)
  const pageIndex = pages.findIndex((page) => page.id === action.payload.pageId)
  const sectionIndex = pages[pageIndex]?.sections.findIndex(
    (section) => section.id === action.payload.sectionId
  )
  switch (action.type) {
    case ActionTypes.CreatePage:
      pages.push({
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        sections: [],
      })
      break
    case ActionTypes.CreateSection:
      pages[pageIndex].sections.push({
        id: uuid(),
        edit: true,
        name: "",
        element: ElementNames.Section,
        children: [],
      })
      break
    case ActionTypes.CreateContent:
      if (action.payload.parentId === action.payload.sectionId) {
        pages[pageIndex].sections[sectionIndex].children.push({
          id: uuid(),
          edit: true,
          children: [],
        })
      } else {
        pages[pageIndex].sections[sectionIndex].children = modifyNode(
          clone(pages[pageIndex].sections[sectionIndex].children),
          action.payload.parentId,
          (node) => {
            node.children.push({ id: uuid(), edit: true, children: [] })
            return node
          }
        )
      }
      break
    case ActionTypes.UpdateSection:
      pages[pageIndex].sections[sectionIndex] = action.payload.state
      break
    case ActionTypes.UpdateContent:
      pages[pageIndex].sections[sectionIndex].children = modifyNode(
        clone(pages[pageIndex].sections[sectionIndex].children),
        action.payload.id,
        () => action.payload.state
      )
      break
    case ActionTypes.DeleteNode:
      if (action.payload.id === action.payload.sectionId) {
        pages[pageIndex].sections.splice(sectionIndex, 1)
      } else {
        pages[pageIndex].sections[sectionIndex].children = deleteNode(
          clone(pages[pageIndex].sections[sectionIndex].children),
          action.payload.id
        )
      }
      break
    default:
      break
  }
  return { pages }
}

function deleteNode(nodes: Content[], id: string) {
  const nodeIndex = nodes.findIndex((node) => id === node.id)
  if (nodeIndex === -1) {
    return nodes.map((node) => {
      node.children = deleteNode(clone(node.children), id)
      return node
    })
  }
  nodes.splice(nodeIndex, 1)
  return nodes
}

function modifyNode(
  nodes: Content[],
  id: string,
  nodeChange: (node: Content) => Content
) {
  return nodes.map((node) => {
    if (node.id === id) {
      return nodeChange(node)
    }
    node.children = modifyNode(clone(node.children), id, nodeChange)
    return node
  })
}
