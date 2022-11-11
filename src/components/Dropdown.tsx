import React from "react"
import styled from "styled-components"

const Label = styled.div`
  font-size: 0.75rem;
  line-height: 17px;
  color: #757575;
`

interface OptionData {
  label: string
  value: string
}

interface DropdownProps {
  label: string
  options: Array<OptionData>
  id?: string
  defaultValue?: string
  style?: string
}

export default function Dropdown({
  label,
  options,
  id,
  defaultValue,
  style,
}: DropdownProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${style}
  `

  const Select = styled.select`
    background-color: #fff;
    border: 1px solid #000;
    padding: 8px;
    font-size: 1rem;
    font-weight: regular;
    font-family: "Roboto", sans-serif;
    line-height: 26px;
  `

  const Option = styled.option`
    font-size: 1rem;
    font-weight: regular;
    line-height: 26px;
  `
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select defaultValue={defaultValue} id={id}>
        {options.map((option) => (
          <Option value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </InputContainer>
  )
}
