import React from "react"
import styled from "styled-components"

const Label = styled.div`
  font-size: 0.75rem;
  line-height: 17px;
  color: #757575;
`

interface InputProps {
  label: string
  defaultValue?: string
  title?: boolean
  styles?: string
  multiline?: boolean
}

export default function Input({
  label,
  defaultValue,
  title = false,
  multiline = false,
  styles,
}: InputProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${styles}
  `

  const inputStyles = `
    background-color: #fff;
    border: 1px solid #000;
    padding: 8px;
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
        <TextArea defaultValue={defaultValue} />
      ) : (
        <TextInput defaultValue={defaultValue} />
      )}
    </InputContainer>
  )
}
