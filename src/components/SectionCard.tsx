import { useContext, useState } from "react"
import styled from "styled-components"
import Dropdown from "./Dropdown"
import Input from "./Input"
import IconButton from "./IconButton"
import {
  PlusSquare,
  Check,
  Edit,
  Trash,
  X,
  ArrowUp,
  ArrowDown,
  Copy,
} from "react-feather"
import Section from "../models/section"
import Elements, { ElementNames } from "../constants/elements"
import Button from "./Button"
import ContentCard from "./ContentCard"
import { AppContext } from "../context/AppContext"
import { ActionTypes } from "../context/actions"
import { Modal } from "@mui/material"

const sectionStyles = `
  border-radius: 16px;
  border: 2px dashed var(--secondary-80);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
  margin: 1rem 0; 
  flex: 1;
  width: 100%;
  background-color: #fff;

  p, ol, ul, a,
  h2,
  h3 {
    display: block;
    margin-top: 0px;
    margin-bottom: 0;
    padding: 8px;
    line-height: auto;
    background-color: var(--secondary-05);
    font-family: var(--body-family);
  }

  p, ol, ul, li { 
    line-height: 1.25rem;
    color: var(--secondary-90);
    
  }

  p:after {
    content: ".";
    color: transparent;
  }

  ol, ul {
    list-style: none;
    counter-reset: item;
  }
  li {
    counter-increment: item;
    margin-bottom: 4px;
  }

  li a {
    display: inline;
    margin:0;
    padding: 0;
    background-color: transparent;
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
`

interface SectionProps {
  pageId: string
  state: Section
  canMoveUp: boolean
  canMoveDown: boolean
}

export default function SectionCard({
  pageId,
  state,
  canMoveUp,
  canMoveDown,
}: SectionProps) {
  const {
    dispatch,
    state: { editing },
  } = useContext(AppContext)
  const { id, children, name, description, element, draft } = state
  const [open, setOpen] = useState(false)

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
    const name = document.getElementById(id + "-name") as HTMLInputElement
    const description = document.getElementById(
      id + "-description"
    ) as HTMLTextAreaElement
    const element = document.getElementById(
      id + "-element"
    ) as HTMLSelectElement
    return {
      id: id,
      name: name.value === "" ? "Rename this section" : name.value,
      description:
        description.value === ""
          ? "Don't procrastinate, add a good description to this section, screen-reader users depend on you to have a better user experience."
          : description.value,
      element: element.value as ElementNames,
      children: children,
      draft: false,
    }
  }

  function handleSave() {
    let newState = getFormData()
    dispatch({
      type: ActionTypes.UpdateSection,
      payload: { pageId, sectionId: id, state: newState },
    })
  }

  function handleCancel() {
    if (draft) {
      dispatch({
        type: ActionTypes.DeleteNode,
        payload: {
          pageId,
          sectionId: id,
          id: id,
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
      payload: { id: id },
    })
  }

  return id === editing ? (
    <Modal open={true}>
      <SectionForm>
        <EndRow>
          <IconButton
            icon={X}
            aria="Cancel Edit"
            label="Cancel"
            styles="margin-right: 24px"
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
          <Input
            id={id + "-name"}
            label="Section Name"
            defaultValue={name}
            title
          />
          <Input
            id={id + "-description"}
            label="Describe this section with intent"
            defaultValue={description}
            style={``}
            multiline
          />
          <Dropdown
            id={id + "-element"}
            label="What type of region is this?"
            defaultValue={element}
            options={Object.keys(Elements).map((name) => {
              return { label: name, value: name }
            })}
            style={``}
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
                    sectionId: id,
                    id: id,
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
        <IconButton
          icon={PlusSquare}
          aria="Add headline"
          label="Add"
          onClick={() =>
            dispatch({
              type: ActionTypes.CreateContent,
              payload: {
                pageId,
                parentId: id,
                sectionId: id,
              },
            })
          }
        />
        <IconButton
          icon={Edit}
          aria="Edit headline"
          label="Edit"
          onClick={handleEdit}
        />
        <IconButton
          icon={Copy}
          aria="Duplicate headline"
          label="Clone"
          onClick={() =>
            dispatch({
              type: ActionTypes.DuplicateSection,
              payload: {
                pageId,
                sectionId: id,
              },
            })
          }
        />
        {canMoveUp && (
          <IconButton
            icon={ArrowUp}
            aria="Move headline up"
            label="Up"
            onClick={() =>
              dispatch({
                type: ActionTypes.MoveSection,
                payload: {
                  pageId,
                  sectionId: id,
                  direction: "up",
                },
              })
            }
          />
        )}
        {canMoveDown && (
          <IconButton
            icon={ArrowDown}
            aria="Move headline down"
            label="Down"
            onClick={() =>
              dispatch({
                type: ActionTypes.MoveSection,
                payload: {
                  pageId,
                  sectionId: id,
                  direction: "down",
                },
              })
            }
          />
        )}
        <IconButton
          icon={Trash}
          aria="Delete headline"
          label="Delete"
          color="red"
          onClick={() => setOpen(true)}
        />
      </EndRow>
      <LabelToo>Name</LabelToo>
      <p>
        <strong>{name}</strong>
      </p>
      <LabelToo>Description</LabelToo>
      <p>{description}</p>
      <LabelToo>Element</LabelToo>
      <p>{element}</p>
      <Column>
        {children.map((contentState, index) => (
          <ContentCard
            pageId={pageId}
            parentId={id}
            sectionId={id}
            state={contentState}
            key={pageId}
            canMoveUp={children.length > 1 && index !== 0}
            canMoveDown={children.length > 1 && index !== children.length - 1}
          />
        ))}
      </Column>
    </SectionContainer>
  )
}
