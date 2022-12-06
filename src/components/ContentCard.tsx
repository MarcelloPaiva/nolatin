import Content from "../models/content"
import styled from "styled-components"
import { ContentTypes } from "../constants/contentTypes"
import { ButtonNoStyle, Text } from "."
import IconButton from "./IconButton"
import { X } from "react-feather"
import { clone } from "../utilities/arrayUtilities"

interface ContentProps {
  state: Content
  onDeleteContent: () => void
  onUpdateContent: (contentData: Content) => void
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

export default function ContentCard({
  state,
  onDeleteContent,
  onUpdateContent,
}: ContentProps) {
  function renderContent(type: ContentTypes) {
    switch (type) {
      case ContentTypes.Bullets:
        return <div>{type}</div>
      case ContentTypes.BulletsLink:
        return <div>{type}</div>
      case ContentTypes.Button:
        return <div>{type}</div>
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
        return <div>{type}</div>
      default:
        return null
    }
  }

  function handleSelect(type: ContentTypes) {
    let newContent = clone(state)
    newContent.type = type
    onUpdateContent(newContent)
  }

  if (state.type) {
    if (state.edit) {
      return <CardForm>{renderContent(state.type)}</CardForm>
    }
    return <CardContainer>{renderContent(state.type)}</CardContainer>
  }
  return (
    <Selection>
      <Corner>
        <IconButton
          icon={X}
          aria="Remove Content Block"
          label="Cancel"
          onClick={onDeleteContent}
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
