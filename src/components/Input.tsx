import styled from "styled-components"
import { Label } from "."

interface InputProps {
  label: string
  defaultValue?: string
  id?: string
  title?: boolean
  style?: string
  multiline?: boolean
  onBlur?: () => void
  type?: string
}

export default function Input({
  label,
  defaultValue,
  id,
  title = false,
  multiline = false,
  style,
  onBlur,
  type,
}: InputProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${style}
  `

  const inputStyles = `
    background-color: #fff;
    border: 3px solid var(--secondary-80);
    border-radius: 4px;
    padding: 8px;
    font-family: "Roboto Mono", sans-serif;
    font-size: ${title ? "1.25rem" : "auto"};
    font-weight: bold;
    line-height: ${title ? "1.25rem" : "auto"};
    color: var(--inputValue);

  `
  const labelStyles = `
    color: var(--inputLabel);
    font-size: 90%;
    margin-top: 1rem;
  `

  const Label = styled.label`
    ${labelStyles}
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
        <TextArea
          aria-label={label}
          defaultValue={defaultValue}
          id={id}
          onBlur={onBlur}
        />
      ) : (
        <TextInput
          aria-label={label}
          defaultValue={defaultValue}
          id={id}
          onBlur={onBlur}
          type={type}
        />
      )}
    </InputContainer>
  )
}
