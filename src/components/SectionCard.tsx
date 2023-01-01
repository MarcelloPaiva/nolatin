import React, { useContext } from "react"
import styled from "styled-components"
import { Label, Text, SubHeading } from "."
import Dropdown from "./Dropdown"
import Input from "./Input"
import IconButton from "./IconButton"
import { Check, Edit, Trash, X } from "react-feather"
import Section from "../models/section"
import Content from "../models/content"
import Elements, { ElementNames } from "../constants/elements"
import Button from "./Button"
import ContentCard from "./ContentCard"
import { AppContext } from "../context/AppContext"
import { Actions, ActionTypes } from "../context/actions"
import { Action } from "@remix-run/router"

const sectionStyles = `
  border-radius: 12px;
  border: 2px solid #a8a8a8;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 40px;
  margin-top: 16px;
  flex: 1;
  width: 100%;
  background-color: #f5f5f5;

  p,
  h2,
  h3 {
    margin-top: 0px;
    margin-bottom: 16px;
  }
`

const SectionContainer = styled.div`
  ${sectionStyles}
`
const SectionForm = styled.form`
  ${sectionStyles}
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface SectionProps {
  pageId: string
  state: Section
}

export default function SectionCard({ pageId, state }: SectionProps) {
  const { dispatch } = useContext(AppContext)

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
      edit: false,
      name: name.value,
      element: element.value as ElementNames,
      children: state.children,
    }
  }

  function handleSave() {}

  function handleCancel() {}

  function handleEdit() {}

  return state.edit ? (
    <SectionForm>
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
      <Input
        id={state.id + "-name"}
        label="Section Name"
        defaultValue={state.name}
        title
        style={`
            margin-bottom: 16px;
        `}
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
      {/* <Input
        id={id + "-description"}
        label="Description"
        defaultValue={state.description}
        multiline
        style={`
            margin-bottom: 16px;
        `}
      />
      <Input
        id={id + "-action"}
        label="Expected action"
        defaultValue={state.action}
        multiline
      /> */}
      <Column>
        {/* {state.children.map((contentState) => (
          <ContentCard
            state={contentState}
            onDeleteContent={() => onDeleteContent(contentState.id)}
            onUpdateContent={(contentData: Content) =>
              onUpdateContent(contentState.id, contentData)
            }
          />
        ))} */}
      </Column>
      <Button
        style={`
        margin-top: 16px;
        color: #0000ff;
        background-color: #e1e1e1;
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
    </SectionForm>
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
      <Label>Name</Label>
      <SubHeading aria-level={2}>{state.name}</SubHeading>
      <Label>Element</Label>
      <Text>{state.element}</Text>
      <Label>Roles</Label>
      <Text>{getRoles(state.element)}</Text>
      <Column>
        {/* {state.children.map((contentState) => (
          <ContentCard
            state={contentState}
            onDeleteContent={() => onDeleteContent(contentState.id)}
            onUpdateContent={(contentData: Content) =>
              onUpdateContent(contentState.id, contentData)
            }
          />
        ))} */}
      </Column>
    </SectionContainer>
  )
}
