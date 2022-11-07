import React from "react"
import styled from "styled-components"

const Label = styled.div`
  font-size: 0.75rem;
  line-height: 17px;
  color: #757575;
`

interface DropdownProps {
  label: string
  defaultValue?: string
  styles?: string
}

export default function Dropdown({
  label,
  defaultValue,
  styles,
}: DropdownProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${styles}
  `

  const Select = styled.select`
    background-color: #fff;
    border: 1px solid #000;
    padding: 8px;
    font-size: 1rem;
    font-weight: regular;
    line-height: 26px;
  `
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select defaultValue={defaultValue} />
    </InputContainer>
  )
}
