import { AppContextState } from "./AppContext"
import { Actions, ActionTypes } from "./actions"
import { v4 as uuid } from "uuid"
import { clone } from "../utilities/arrayUtilities"
import { ElementNames } from "../constants/elements"
import { ContentTypes } from "../constants/contentTypes"
import Content from "../models/content"

export default function appReducer(state: AppContextState, action: Actions) {
  let editing = state.editing
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
      const sectionId = uuid()
      pages[pageIndex].sections.push({
        id: sectionId,
        name: "",
        description: "",
        element: ElementNames.Section,
        children: [],
        draft: true,
      })
      editing = sectionId
      break
    case ActionTypes.CreateContent:
      const contentId = uuid()
      if (action.payload.parentId === action.payload.sectionId) {
        pages[pageIndex].sections[sectionIndex].children.push({
          type: ContentTypes.Title,
          id: contentId,
          children: [],
          title: "",
          description: "",
          draft: true,
        })
      } else {
        pages[pageIndex].sections[sectionIndex].children = modifyNode(
          clone(pages[pageIndex].sections[sectionIndex].children),
          action.payload.parentId,
          (node) => {
            node.children.push({
              type: ContentTypes.Title,
              id: contentId,
              children: [],
              title: "",
              description: "",
              draft: true,
            })
            return node
          }
        )
      }
      editing = contentId
      break
    case ActionTypes.EditNode:
      editing = action.payload.id
      break
    case ActionTypes.CancelNode:
      editing = null
      break
    case ActionTypes.UpdateSection:
      pages[pageIndex].sections[sectionIndex] = action.payload.state
      editing = null
      break
    case ActionTypes.UpdateContent:
      pages[pageIndex].sections[sectionIndex].children = modifyNode(
        clone(pages[pageIndex].sections[sectionIndex].children),
        action.payload.id,
        () => action.payload.state
      )
      editing = null
      break
    case ActionTypes.UpdateType:
      pages[pageIndex].sections[sectionIndex].children = modifyNode(
        clone(pages[pageIndex].sections[sectionIndex].children),
        action.payload.id,
        (node) => {
          node.type = action.payload.type
          return node
        }
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
    case ActionTypes.DeletePage:
      pages.splice(pageIndex, 1)
      break
    case ActionTypes.MoveSection:
      const section = clone(pages[pageIndex].sections[sectionIndex])
      pages[pageIndex].sections.splice(sectionIndex, 1)
      if (action.payload.direction === "up") {
        pages[pageIndex].sections.splice(sectionIndex - 1, 0, section)
      } else {
        pages[pageIndex].sections.splice(sectionIndex + 1, 0, section)
      }
      break
    case ActionTypes.MoveContent:
      if (action.payload.parentId === action.payload.sectionId) {
        const contentIndex = pages[pageIndex].sections[
          sectionIndex
        ].children.findIndex((content) => content.id === action.payload.id)
        let content = clone(
          pages[pageIndex].sections[sectionIndex].children[contentIndex]
        )
        pages[pageIndex].sections[sectionIndex].children.splice(contentIndex, 1)
        if (action.payload.direction === "up") {
          pages[pageIndex].sections[sectionIndex].children.splice(
            contentIndex - 1,
            0,
            content
          )
        } else {
          pages[pageIndex].sections[sectionIndex].children.splice(
            contentIndex + 1,
            0,
            content
          )
        }
      } else {
        pages[pageIndex].sections[sectionIndex].children = modifyNode(
          clone(pages[pageIndex].sections[sectionIndex].children),
          action.payload.parentId,
          (node) => {
            const contentIndex = node.children.findIndex(
              (content) => content.id === action.payload.id
            )
            const content = clone(node.children[contentIndex])
            node.children.splice(contentIndex, 1)
            if (action.payload.direction === "up") {
              node.children.splice(contentIndex - 1, 0, content)
            } else {
              node.children.splice(contentIndex + 1, 0, content)
            }
            return node
          }
        )
      }
      break
    default:
      break
  }
  return { pages, editing }
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
