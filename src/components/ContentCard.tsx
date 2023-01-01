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

interface ContentProps {
  pageId: string
  sectionId: string
  state: Content
}

const Selection = styled.div`
  position: relative;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 16px #e1e1e1;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`
const Corner = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
const cardStyles = `
  background-color: #e1e1e1;
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
        return (
          <ButtonContent
            edit={state.edit}
            label={state.title ?? ""}
            action={state.description ?? ""}
          />
        )
      case ContentTypes.BulletsLink:
        return <div>{type}</div>
      case ContentTypes.Button:
        return (
          <ButtonContent
            edit={state.edit}
            label={state.title ?? ""}
            action={state.description ?? ""}
          />
        )
      case ContentTypes.Checkbox:
        return <div>{type}</div>
      case ContentTypes.Dropdown:
        return <div>{type}</div>
      case ContentTypes.Image:
        return <div>{type}</div>
      case ContentTypes.Input:
        return <div>{type}</div>
      case ContentTypes.Link:
        return <div>{type}</div>
      case ContentTypes.Numbers:
        return <div>{type}</div>
      case ContentTypes.NumbersLink:
        return <div>{type}</div>
      case ContentTypes.Radio:
        return <div>{type}</div>
      case ContentTypes.Title:
        return (
          <TitleContent
            edit={state.edit}
            title={state.title ?? ""}
            description={state.description ?? ""}
          />
        )
      default:
        return null
    }
  }

  function handleSelect(type: ContentTypes) {
    let newContent = clone(state)
    newContent.type = type
    // onUpdateContent(newContent)
  }

  function handleSave() {}
  function handleCancel() {}
  function handleEdit() {}

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
          color: "#a8a8a8",
        }}
      >
        Block type
      </Text>

      {(Object.keys(ContentTypes) as Array<keyof typeof ContentTypes>).map(
        (key) => (
          <ButtonNoStyle onClick={() => handleSelect(ContentTypes[key])}>
            <Text>{ContentTypes[key]}</Text>
          </ButtonNoStyle>
        )
      )}
    </Selection>
  )
}
