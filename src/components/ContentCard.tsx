import Content from "../models/content"
import styled from "styled-components"
import { ContentTypes } from "../constants/contentTypes"
import { ButtonNoStyle, Text } from "."
import IconButton from "./IconButton"
import { Check, Edit, Trash, X } from "react-feather"
import { clone } from "../utilities/arrayUtilities"
import ButtonContent from "./contentCards/ButtonContent"
import TitleContent from "./contentCards/TitleContent"
import { useContext } from "react"
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

interface ContentProps {
  pageId: string
  sectionId: string
  state: Content
}

const Selection = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 0 4px hsla(120,100%,40%, 0.5);
  border-radius: 8px;
  padding: 24px;
  margin: 16px;
  margin-top: 1rem;
  margin-bottom: .5rem;
  display: flex;
  flex-direction: column;
`
const Corner = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
const cardStyles = `
  background-color: hsla(120,100%,60%, 0.1);
  border: 3px solid hsla(120,100%,20%, 0.25); 
  margin-top: 1rem;
  margin-bottom: .5rem;
  border-radius: 8px;
  padding: 16px;
`
const CardContainer = styled.div`
  ${cardStyles}
`
const CardForm = styled.form`
  ${cardStyles}
`

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function ContentCard({
  state,
  pageId,
  sectionId,
}: ContentProps) {
  const { dispatch } = useContext(AppContext)

  function renderContent(type: ContentTypes) {
    switch (type) {
      case ContentTypes.Bullets:
        return <BulletedContent state={state} />
      case ContentTypes.BulletsLink:
        return <BulletedLinkContent state={state} />
      case ContentTypes.Button:
        return <ButtonContent state={state} />
      // case ContentTypes.Checkbox:
      //   return <div>{type}</div>
      case ContentTypes.Dropdown:
        return <DropdownContent state={state} />
      case ContentTypes.Image:
        return <ImageContent state={state} />
      case ContentTypes.Input:
        return <InputContent state={state} />
      case ContentTypes.Link:
        return <LinkContent state={state} />
      case ContentTypes.Numbers:
        return <NumberedContent state={state} />
      case ContentTypes.NumbersLink:
        return <NumberedLinkContent state={state} />
      // case ContentTypes.Radio:
      //   return <div>{type}</div>
      case ContentTypes.Title:
        return (
          <TitleContent state={state} pageId={pageId} sectionId={sectionId} />
        )
      default:
        return null
    }
  }

  function getFormData(): Omit<Content, "id" | "children" | "type" | "edit"> {
    const title = document.getElementById(
      state.id + "-title"
    ) as HTMLInputElement | null
    const description = document.getElementById(
      state.id + "-description"
    ) as HTMLSelectElement | null
    const url = document.getElementById(
      state.id + "-url"
    ) as HTMLSelectElement | null
    return {
      title: title?.value ?? "",
      description: description?.value ?? "",
      url: url?.value ?? "",
    }
  }

  function handleSelect(type: ContentTypes) {
    let newContent = clone(state)
    newContent.type = type
    dispatch({
      type: ActionTypes.UpdateContent,
      payload: {
        pageId,
        sectionId,
        id: state.id,
        state: newContent,
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
          edit: false,
          children: newContent.children,
        },
      },
    })
  }

  function handleCancel() {
    let newContent = clone(state)
    newContent.edit = false
    dispatch({
      type: ActionTypes.UpdateContent,
      payload: {
        pageId,
        sectionId,
        id: state.id,
        state: newContent,
      },
    })
  }

  function handleEdit() {
    let newContent = clone(state)
    newContent.edit = true
    dispatch({
      type: ActionTypes.UpdateContent,
      payload: {
        pageId,
        sectionId,
        id: state.id,
        state: newContent,
      },
    })
  }

  if (state.type) {
    if (state.edit) {
      return (
        <CardForm>
          <Row>
            <IconButton
              icon={Check}
              aria="Save Section"
              label="Save"
              onClick={handleSave}
            />
            <IconButton
              icon={X}
              aria="Cancel Edit"
              label="Cancel"
              onClick={handleCancel}
            />
          </Row>
          <Dropdown
            label="Content type"
            defaultValue={state.type}
            options={Object.values(ContentTypes).map((type) => ({
              label: type,
              value: type,
            }))}
            onSelect={handleSelect}
          />
          {renderContent(state.type)}
        </CardForm>
      )
    }
    return (
      <CardContainer>
        <Row>
          <IconButton
            icon={Edit}
            aria="Edit Story"
            label="Edit"
            onClick={handleEdit}
          />
          <IconButton
            icon={Trash}
            aria="Delete Story"
            label="Delete"
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
        </Row>
        {renderContent(state.type)}
      </CardContainer>
    )
  }
  return (
    <Selection>
      <Corner>
        <IconButton
          icon={X}
          aria="Remove Content Block"
          label="Cancel"
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
          <ButtonNoStyle onClick={() => handleSelect(ContentTypes[key])}>
            <Text    
            style={{
              color: "hsla(120,100%,25%, 1)",
              fontSize: "1.25rem",
              lineHeight: "1.25rem",
            }}
            >
              {ContentTypes[key]}</Text>
          </ButtonNoStyle>
        )
      )}
    </Selection>
  )
}
