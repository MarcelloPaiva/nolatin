import React, { useState } from "react"
import styled from "styled-components"
import { Label, Text, SubHeading } from "."
import Dropdown from "./Dropdown"
import Input from "./Input"
import IconButton from "./IconButton"
import { Check, Edit, Trash, X } from "react-feather"
import Story from "../models/story"
import { Role } from "../models/roles"
import Elements, { ElementNames } from "../constants/elements"
import { CardData } from "../routes/create"
import Button from "./Button"

const cardStyles = `
border-radius: 12px;
border: 2px solid #000;
display: flex;
flex-direction: column;
padding: 16px;
margin-bottom: 40px;
margin-top: 16px;
flex: 1

p,
h2,
h3 {
  margin-top: 0px;
  margin-bottom: 16px;
}
`

const CardContainer = styled.div`
  ${cardStyles}
`
const CardForm = styled.form`
  ${cardStyles}
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface CardProps {
  id: string
  state: Story
  onCancel: () => void
  onDelete: () => void
  onEdit: () => void
  onSave: (newCard: Story) => void
  onAddChild: () => void
  children?: React.ReactNode
}

export default function Card({
  id,
  state,
  onCancel,
  onDelete,
  onEdit,
  onSave,
  onAddChild,
  children,
}: CardProps) {
  function getRoles(element: ElementNames): string {
    let roles = Elements[element].roles
    let roleString = ""
    roles.forEach((role, index) => {
      roleString += role
      if (index !== roles.length - 1) roleString += ", "
    })
    return roleString
  }

  function getFormData(): Story {
    const name = document.getElementById(id + "-name") as HTMLInputElement
    const description = document.getElementById(
      id + "-description"
    ) as HTMLInputElement
    const element = document.getElementById(
      id + "-element"
    ) as HTMLSelectElement
    const action = document.getElementById(id + "-action") as HTMLInputElement
    return {
      edit: false,
      name: name.value,
      description: description.value,
      element: element.value as ElementNames,
      action: action.value,
    }
  }

  return state.edit ? (
    <CardForm>
      <Row>
        <IconButton
          icon={Check}
          label="Save Story"
          onClick={() => onSave(getFormData())}
        />
        <IconButton icon={X} label="Cancel Edit" onClick={onCancel} />
      </Row>
      <Input
        id={id + "-name"}
        label="Name"
        defaultValue={state.name}
        title
        style={`
            margin-bottom: 16px;
        `}
      />
      <Input
        id={id + "-description"}
        label="Description"
        defaultValue={state.description}
        multiline
        style={`
            margin-bottom: 16px;
        `}
      />
      <Dropdown
        id={id + "-element"}
        label="Element"
        defaultValue={state.element}
        options={Object.keys(Elements).map((name) => {
          return { label: name, value: name }
        })}
        style={`
            margin-bottom: 16px;
        `}
      />
      <Input
        id={id + "-action"}
        label="Expected action"
        defaultValue={state.action}
        multiline
      />
      <Button style={`margin-top: 16px;`} onClick={onAddChild}>
        Add Child
      </Button>
      <Column>{children}</Column>
    </CardForm>
  ) : (
    <CardContainer>
      <Row>
        <IconButton icon={Edit} label="Edit Story" onClick={onEdit} />
        <IconButton icon={Trash} label="Delete Story" onClick={onDelete} />
      </Row>
      <Label>Name</Label>
      <SubHeading aria-level={2}>{state.name}</SubHeading>
      <Label>Description</Label>
      <Text>{state.description}</Text>
      <Label>Element</Label>
      <Text>{state.element}</Text>
      <Label>Roles</Label>
      <Text>{getRoles(state.element)}</Text>
      <Label>Expected action</Label>
      <Text>{state.action}</Text>
      <Column>{children}</Column>
    </CardContainer>
  )
}
