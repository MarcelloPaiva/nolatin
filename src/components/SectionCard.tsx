import { useContext, useState } from "react"
import styled from "styled-components"
import Dropdown from "./Dropdown"
import Input from "./Input"
import IconButton from "./IconButton"
import { Check, Edit, Trash, X } from "react-feather"
import Section from "../models/section"
import Elements, { ElementNames } from "../constants/elements"
import Button from "./Button"
import ContentCard from "./ContentCard"
import { AppContext } from "../context/AppContext"
import { ActionTypes } from "../context/actions"
import { Modal } from "@mui/material"

const sectionStyles = `
  border-radius: 16px;
  border: 2px dashed var(--secondary-40);
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0px; 
  flex: 1;
  width: auto;
  background-color: #fff;

  p,
  h2,
  h3 {
    margin-top: 0px;
    margin-bottom: 0;
    line-height: auto;
  }

  p { 
    font-size: 1.25rem !important;
    line-height: 1.25rem;
  }
`

const SectionContainer = styled.div`
  ${sectionStyles}
`
const SectionForm = styled.form`
  margin: 40px;
  padding: 40px;
  border-radius: 8px;
  background: white;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`
const LabelToo = styled.label`
  color: var(--primary-60);
  margin-top: 16px;
  font-size: 1rem;
`

interface SectionProps {
  pageId: string
  state: Section
}

export default function SectionCard({ pageId, state }: SectionProps) {
  const {
    dispatch,
    state: { editing },
  } = useContext(AppContext)
  const [localName, setLocalName] = useState(state.name)

  function getRoles(element: ElementNames): string {
    let roles = Elements[element].roles
    let roleString = ""
    roles.forEach((role, index) => {
      roleString += role
      if (index !== roles.length - 1) roleString += ", "
    })
    return roleString
  }

  function getFormData(): Section {
    const name = document.getElementById(state.id + "-name") as HTMLInputElement
    const element = document.getElementById(
      state.id + "-element"
    ) as HTMLSelectElement
    return {
      id: state.id,
      name: name.value,
      element: element.value as ElementNames,
      children: state.children,
    }
  }

  function handleSave() {
    let newState = getFormData()
    dispatch({
      type: ActionTypes.UpdateSection,
      payload: { pageId, sectionId: state.id, state: newState },
    })
  }

  function handleCancel() {
    dispatch({
      type: ActionTypes.CancelNode,
      payload: {},
    })
  }

  function handleEdit() {
    dispatch({
      type: ActionTypes.EditNode,
      payload: { id: state.id },
    })
  }

  return state.id === editing ? (
    <Modal open={true}>
      <SectionForm>
        <Row>
          <IconButton
            icon={Check}
            aria="Save Section"
            label="Save"
            onClick={handleSave}
            disabled={localName === ""}
          />
          <IconButton
            icon={X}
            aria="Cancel Edit"
            label="Cancel"
            onClick={handleCancel}
          />
        </Row>
        <Input
          id={state.id + "-name"}
          label="Section Name"
          defaultValue={localName}
          title
          style={`
            margin-bottom: 16px;
        `}
          onBlur={() => {
            const name = document.getElementById(
              state.id + "-name"
            ) as HTMLInputElement
            setLocalName(name.value)
          }}
        />
        <Dropdown
          id={state.id + "-element"}
          label="Element"
          defaultValue={state.element}
          options={Object.keys(Elements).map((name) => {
            return { label: name, value: name }
          })}
          style={`
            margin-bottom: 16px;
        `}
        />
      </SectionForm>
    </Modal>
  ) : (
    <SectionContainer>
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
          color="red"
          styles="margin-left:24px;"
          onClick={() =>
            dispatch({
              type: ActionTypes.DeleteNode,
              payload: {
                pageId,
                sectionId: state.id,
                id: state.id,
              },
            })
          }
        />
      </Row>
      <LabelToo>Name</LabelToo>
      <p>
        <strong>{state.name}</strong>
      </p>
      <LabelToo>Element</LabelToo>
      <p>{state.element}</p>
      <LabelToo>Export as</LabelToo>
      <p>{getRoles(state.element)}</p>
      <Column>
        {state.children.map((contentState) => (
          <ContentCard
            pageId={pageId}
            sectionId={state.id}
            state={contentState}
            key={pageId}
          />
        ))}
      </Column>
      <Button
        styles={`
        margin-top: 1rem;
        font-size: 1.25rem;
        background-color: hsla(120,100%,60%, 0.1);
        color: hsla(120,100%,25%, 0.85);
        border: 3px solid hsla(120,100%,30%, 0.75);
        width: auto;
        margin: 2rem auto 0;
      `}
        onClick={() =>
          dispatch({
            type: ActionTypes.CreateContent,
            payload: {
              pageId,
              parentId: state.id,
              sectionId: state.id,
            },
          })
        }
      >
        Add content block
      </Button>
    </SectionContainer>
  )
}
