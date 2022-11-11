import React from "react"
import styled from "styled-components"
import { Label } from "."

interface InputProps {
  label: string
  defaultValue: string
  id?: string
  title?: boolean
  style?: string
  multiline?: boolean
}

export default function Input({
  label,
  defaultValue,
  id,
  title = false,
  multiline = false,
  style,
}: InputProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${style}
  `

  const inputStyles = `
    background-color: #fff;
    border: 1px solid #000;
    padding: 8px;
    font-family: "Roboto", sans-serif;
    font-size: ${title ? 1.5 : 1}rem;
    font-weight: ${title ? "bold" : "regular"};
    line-height: ${title ? 32 : 26}px;
  `
  const TextInput = styled.input`
    ${inputStyles}
  `
  const TextArea = styled.textarea`
    ${inputStyles}
  `
  return (
    <InputContainer>
      <Label>{label}</Label>
      {multiline ? (
        <TextArea aria-label={label} defaultValue={defaultValue} id={id} />
      ) : (
        <TextInput aria-label={label} defaultValue={defaultValue} id={id} />
      )}
    </InputContainer>
  )
}
