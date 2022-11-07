import React from "react"
import styled from "styled-components"
import Dropdown from "./Dropdown"
import Input from "./Input"

const CardContainer = styled.div`
  border-radius: 12px;
  border: 2px solid #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

interface CardProps {}

export default function Card() {
  return (
    <CardContainer>
      <Input
        label="Name"
        defaultValue="Headline"
        title
        styles={`
            margin-bottom: 16px;
        `}
      />
      <Input
        label="Description"
        defaultValue="What's the user's expectation? Please describe."
        multiline
        styles={`
            margin-bottom: 16px;
        `}
      />
      <Dropdown
        label="Role"
        styles={`
            margin-bottom: 16px;
        `}
      />
      <Input
        label="Expected action"
        defaultValue="How do you think the user will react?"
        multiline
      />
    </CardContainer>
  )
}
