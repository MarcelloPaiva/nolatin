import styled from "styled-components"
import { Label } from "./"

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
  onSelect?: (value: any) => void
}

export default function Dropdown({
  label,
  options,
  id,
  defaultValue,
  style,
  onSelect,
}: DropdownProps) {
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${style}
  `

  const Select = styled.select`
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1.25rem;
    // font-weight: regular;
    // font-family: "Roboto", sans-serif;
    // line-height: 26px;
  `

  const Option = styled.option`
    // font-size: 1rem;
    // font-weight: regular;
    // line-height: 26px;
  `
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select
        defaultValue={defaultValue}
        id={id}
        onChange={(event) => {
          if (onSelect) onSelect(event.target.value)
        }}
      >
        {options.map((option) => (
          <Option value={option.value} key={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </InputContainer>
  )
}
