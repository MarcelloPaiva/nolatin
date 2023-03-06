import { forwardRef } from "react"
import styled from "styled-components"
import { LabelToo } from "./"

interface InputProps {
  label: string
  defaultValue?: string
  id?: string
  title?: boolean
  style?: string
  multiline?: boolean
  onBlur?: () => void
  onChange?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  type?: string
}

const Input = forwardRef(
  (
    {
      label,
      defaultValue,
      id,
      title = false,
      multiline = false,
      style,
      onBlur,
      onKeyDown,
      type,
    }: InputProps,
    ref
  ) => {
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
    font-family: var(--body-family);
    color: var(--inputValue);
    font-size: 1rem;

  `
    const TextInput = styled.input`
      ${inputStyles}
    `
    const TextArea = styled.textarea`
      ${inputStyles}
    `
    return (
      <InputContainer>
        <LabelToo>{label}</LabelToo>
        {multiline ? (
          <TextArea
            aria-label={label}
            defaultValue={defaultValue}
            id={id}
            onBlur={onBlur}
            onKeyDown={(event) => onKeyDown && onKeyDown(event)}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <TextInput
            aria-label={label}
            defaultValue={defaultValue}
            id={id}
            onBlur={onBlur}
            onKeyDown={(event) => onKeyDown && onKeyDown(event)}
            type={type}
            ref={ref as React.RefObject<HTMLInputElement>}
          />
        )}
      </InputContainer>
    )
  }
)

export default Input
