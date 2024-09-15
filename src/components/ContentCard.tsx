import Content from "../models/content"
import styled from "styled-components"
import { ContentTypes } from "../constants/contentTypes"
import { ButtonNoStyle, Text } from "."
import IconButton from "./IconButton"
import {
  PlusSquare,
  Check,
  Edit,
  Trash,
  X,
  ArrowDown,
  ArrowUp,
  Copy,
} from "react-feather"
import { clone } from "../utilities/arrayUtilities"
import ButtonContent from "./contentCards/ButtonContent"
import TitleContent from "./contentCards/TitleContent"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { ActionTypes } from "../context/actions"
import BulletedContent from "./contentCards/BulletedContent"
import BulletedLinkContent from "./contentCards/BulletedLinkContent"
import ImageContent from "./contentCards/ImageContent"
import InputContent from "./contentCards/InputContent"
import LinkContent from "./contentCards/LinkContent"
import NumberedContent from "./contentCards/NumberedContent"
import NumberedLinkContent from "./contentCards/NumberedLinkContent"
import Dropdown from "./Dropdown"
import DropdownContent from "./contentCards/DropdownContent"
import HeadingLinkContent from "./contentCards/HeadingLinkContent"
import HeadingContent from "./contentCards/HeadingContent"
import ParagraphContent from "./contentCards/ParagraphContent"
import { Modal } from "@mui/material"
import Button from "./Button"

interface ContentCardProps {
  pageId: string
  parentId: string
  sectionId: string
  state: Content
  canMoveUp: boolean
  canMoveDown: boolean
}

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px;
  padding: 40px;
  border-radius: 8px;
  background: white;
`
const Corner = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
const cardStyles = `
  background-color: hsla(var(--h-accent),100%,80%, 0.125);
  border: 2px solid hsla(var(--h-accent),100%,20%, 0.05); 
  margin-top: 1rem;
  margin-bottom: .5rem;
  border-radius: 8px;
  padding: 16px;
`
const CardContainer = styled.div`
  ${cardStyles}
`
const CardForm = styled.form`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: white;
`

const EndRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light);
  padding: 24px;
  margin: 40px;
  border-radius: 8px;
  max-width: 600px;
`

export default function ContentCard({
  state,
  pageId,
  sectionId,
  parentId,
  canMoveUp,
  canMoveDown,
}: ContentCardProps) {
  const [open, setOpen] = useState(false)
  const {
    dispatch,
    state: { editing },
  } = useContext(AppContext)

  function renderContent(type: ContentTypes, edit: boolean) {
    switch (type) {
      case ContentTypes.Bullets:
        return <BulletedContent state={state} edit={edit} />
      case ContentTypes.BulletsLink:
        return <BulletedLinkContent state={state} edit={edit} />
      case ContentTypes.Button:
        return <ButtonContent state={state} edit={edit} />
      case ContentTypes.Dropdown:
        return <DropdownContent state={state} edit={edit} />
      case ContentTypes.Image:
        return <ImageContent state={state} edit={edit} />
      case ContentTypes.Input:
        return <InputContent state={state} edit={edit} />
      case ContentTypes.Link:
        return <LinkContent state={state} edit={edit} />
      case ContentTypes.Numbers:
        return <NumberedContent state={state} edit={edit} />
      case ContentTypes.NumbersLink:
        return <NumberedLinkContent state={state} edit={edit} />
      case ContentTypes.HeadingLink:
        return <HeadingLinkContent state={state} edit={edit} />
      case ContentTypes.HeadingText:
        return <HeadingContent state={state} edit={edit} />
      case ContentTypes.Paragraph:
        return <ParagraphContent state={state} edit={edit} />
      case ContentTypes.Title:
        return (
          <TitleContent
            state={state}
            pageId={pageId}
            sectionId={sectionId}
            edit={edit}
          />
        )
      default:
        return null
    }
  }

  function getFormData(): Omit<Content, "id" | "children" | "type" | "draft"> {
    const title = document.getElementById(
      state.id + "-title"
    ) as HTMLInputElement | null
    const description = document.getElementById(
      state.id + "-description"
    ) as HTMLSelectElement | null
    const urlType = document.querySelector(
      'input[name="urlType"]:checked'
    ) as HTMLInputElement | null

    let url: HTMLInputElement | null = null

    if (urlType) {
      url = document.getElementById(
        state.id + "-url-" + urlType.value
      ) as HTMLInputElement | null
    } else {
      url = document.getElementById(
        state.id + "-url"
      ) as HTMLInputElement | null
    }

    return {
      title: title?.value ?? "",
      description: description?.value ?? "",
      url: url?.value ?? "",
      urlType: (urlType?.value as "external" | "internal") ?? undefined,
    }
  }

  function handleSelect(type: ContentTypes) {
    let newContent = clone(state)
    newContent.type = type
    dispatch({
      type: ActionTypes.UpdateType,
      payload: {
        pageId,
        sectionId,
        id: state.id,
        type,
      },
    })
  }

  function handleSave() {
    let formData = getFormData()
    let newContent = clone(state)
    dispatch({
      type: ActionTypes.UpdateContent,
      payload: {
        pageId,
        sectionId,
        id: state.id,
        state: {
          ...newContent,
          ...formData,
          children: newContent.children,
          draft: false,
        },
      },
    })
  }

  function handleCancel() {
    if (state.draft) {
      dispatch({
        type: ActionTypes.DeleteNode,
        payload: {
          pageId,
          sectionId,
          id: state.id,
        },
      })
    } else {
      dispatch({
        type: ActionTypes.CancelNode,
        payload: {},
      })
    }
  }

  function handleEdit() {
    dispatch({
      type: ActionTypes.EditNode,
      payload: {
        id: state.id,
      },
    })
  }

  if (state.type) {
    if (state.id === editing) {
      return (
        <Modal open={true}>
          <CardForm>
            <EndRow>
              <IconButton
                icon={X}
                aria="Cancel Edit"
                label="Cancel"
                onClick={handleCancel}
              />
              <IconButton
                icon={Check}
                color="var(--button-save-label)"
                aria="Save Section"
                label="Save"
                styles="background:var(--button-save-bg);border-radius:4px;width:60px;"
                onClick={handleSave}
              />
            </EndRow>
            <div className="scrollMe">
              <Dropdown
                label="Content type"
                defaultValue={state.type}
                options={Object.values(ContentTypes).map((type) => ({
                  label: type,
                  value: type,
                }))}
                onSelect={handleSelect}
              />
              {renderContent(state.type, true)}
            </div>
          </CardForm>
        </Modal>
      )
    }
    return (
      <CardContainer>
        <Modal open={open}>
          <ModalContainer>
            <p>Are you sure you want to delete this content block?</p>
            <Row>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.DeleteNode,
                    payload: {
                      pageId,
                      sectionId,
                      id: state.id,
                    },
                  })
                }
                styles="background: red"
              >
                Delete
              </Button>
            </Row>
          </ModalContainer>
        </Modal>
        <EndRow className="card-toolbar">
          {state.type === ContentTypes.Title && (
            <IconButton
              icon={PlusSquare}
              aria="Add content block"
              label="Add"
              onClick={() =>
                dispatch({
                  type: ActionTypes.CreateContent,
                  payload: {
                    pageId,
                    sectionId,
                    parentId: state.id,
                  },
                })
              }
            />
          )}
          <IconButton
            icon={Edit}
            aria="Edit content block"
            label="Edit"
            onClick={handleEdit}
          />
          <IconButton
            icon={Copy}
            aria="Duplicate content block"
            label="Clone"
            onClick={() =>
              dispatch({
                type: ActionTypes.DuplicateContent,
                payload: {
                  pageId,
                  sectionId,
                  parentId,
                  duplicateId: state.id,
                },
              })
            }
          />
          {canMoveUp && (
            <IconButton
              icon={ArrowUp}
              aria="Move content block Up"
              label="Up"
              onClick={() =>
                dispatch({
                  type: ActionTypes.MoveContent,
                  payload: {
                    pageId,
                    sectionId,
                    parentId,
                    id: state.id,
                    direction: "up",
                  },
                })
              }
            />
          )}
          {canMoveDown && (
            <IconButton
              icon={ArrowDown}
              aria="Move content block down"
              label="Down"
              onClick={() =>
                dispatch({
                  type: ActionTypes.MoveContent,
                  payload: {
                    pageId,
                    sectionId,
                    parentId,
                    id: state.id,
                    direction: "down",
                  },
                })
              }
            />
          )}
          <IconButton
            icon={Trash}
            color="red"
            aria="Delete content block"
            label="Delete"
            onClick={() => setOpen(true)}
          />
        </EndRow>
        {renderContent(state.type, false)}
      </CardContainer>
    )
  }
  return (
    <Modal open={state.type === undefined}>
      <Selection>
        <Corner>
          <IconButton
            icon={X}
            aria="Cancel action"
            label="Cancel MP"
            styles="margin-right: 24px"
            onClick={() =>
              dispatch({
                type: ActionTypes.DeleteNode,
                payload: {
                  pageId,
                  sectionId,
                  id: state.id,
                },
              })
            }
          />
        </Corner>
        <Text
          style={{
            color: "#000",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Select content block type:
        </Text>

        {(Object.keys(ContentTypes) as Array<keyof typeof ContentTypes>).map(
          (key) => (
            <ButtonNoStyle
              onClick={() => handleSelect(ContentTypes[key])}
              key={`${key}-content`}
            >
              <Text
                style={{
                  color: "red",
                }}
              >
                {ContentTypes[key]}
              </Text>
            </ButtonNoStyle>
          )
        )}
      </Selection>
    </Modal>
  )
}
