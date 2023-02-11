import { useContext, useState } from "react"
import styled from "styled-components"
import Dropdown from "./Dropdown"
import Input from "./Input"
import IconButton from "./IconButton"
import { PlusSquare, Check, Edit, Trash, X } from "react-feather"
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

  p, ol, ul, a,
  h2,
  h3 {
    display: block;
    margin-top: 0px;
    margin-bottom: 0;
    padding: 8px;
    line-height: auto;
    background-color: var(--primary-05);
  }

  p, ol, ul, li { 
    line-height: 1.25rem;
    font-size: 1rem;
  }

  ol, ul {
    list-style: none;
    counter-reset: item;
  }
  li {
    counter-increment: item;
    margin-bottom: 4px;
  }
  ol>li:before {
    margin-right: 10px;
    content: counter(item);
    font-size: .75rem;
    background: var(--secondary-60);
    border-radius: 100%;
    color: white;
    width: 1.25rem;
    text-align: center;
    display: inline-block;
  }
  ul>li:before {
    margin-right: 10px;
    content: "•";
    font-size: .75rem;
    background: var(--secondary-60);
    border-radius: 100%;
    color: white;
    width: 1.25rem;
    text-align: center;
    display: inline-block;
  }
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
  background-color: var(--primary-light);
  padding: 24px;
  margin: 40px;
  border-radius: 8px;
`
const LabelToo = styled.label`
  color: var(--primary-70);
  margin-top: 16px;
  font-size: 0.75rem;
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
  const [open, setOpen] = useState(false)
  const [localName, setLocalName] = useState(state.name)

  // function getRoles(element: ElementNames): string {
  //   let roles = Elements[element].roles
  //   let roleString = ""
  //   roles.forEach((role, index) => {
  //     roleString += role
  //     if (index !== roles.length - 1) roleString += ", "
  //   })
  //   return roleString
  // }

  function getFormData(): Section {
    const name = document.getElementById(state.id + "-name") as HTMLInputElement
    const description = document.getElementById(
      state.id + "-description"
    ) as HTMLTextAreaElement
    const element = document.getElementById(
      state.id + "-element"
    ) as HTMLSelectElement
    return {
      id: state.id,
      name: name.value,
      description: description.value,
      element: element.value as ElementNames,
      children: state.children,
      draft: false,
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
    if (state.draft) {
      dispatch({
        type: ActionTypes.DeleteNode,
        payload: {
          pageId,
          sectionId: state.id,
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
      payload: { id: state.id },
    })
  }

  return state.id === editing ? (
    <Modal open={true}>
      <SectionForm>
        <EndRow>
          <IconButton
            icon={X}
            aria="Cancel Edit"
            label="Cancel"
            onClick={handleCancel}
          />
          <IconButton
            icon={Check}
            color="hsla(120,100%,10%, 0.9)"
            aria="Save Section"
            label="Save MP"
            styles="background:hsla(120,100%,60%, 0.2);border-radius:4px;width:60px;padding-top:16px;"
            onClick={handleSave}
            disabled={localName === ""}
          />
        </EndRow>
        <div className="scrollMe">
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
          <Input
            id={state.id + "-description"}
            label="Section Description"
            defaultValue={state.description}
            style={`
            margin-bottom: 16px;
        `}
            multiline
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
        </div>
      </SectionForm>
    </Modal>
  ) : (
    <SectionContainer>
      <Modal open={open}>
        <ModalContainer>
          <p>Are you sure you want to delete this section?</p>
          <Row>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
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
              styles="background: red"
            >
              Delete
            </Button>
          </Row>
        </ModalContainer>
      </Modal>
      <EndRow>
        <IconButton
          icon={PlusSquare}
          aria="Add Story"
          label="Add"
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
        />
        <IconButton
          icon={Edit}
          aria="Edit Story"
          label="Edit"
          styles="margin-left:24px;"
          onClick={handleEdit}
        />
        <IconButton
          icon={Trash}
          aria="Delete Story"
          label="Delete"
          color="red"
          styles="margin-left:24px;"
          onClick={() => setOpen(true)}
        />
      </EndRow>
      <LabelToo>Name</LabelToo>
      <p>
        <strong>{state.name}</strong>
      </p>
      <LabelToo>Description</LabelToo>
      <p>{state.description}</p>
      <LabelToo>Element</LabelToo>
      <p>{state.element}</p>
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
    </SectionContainer>
  )
}
