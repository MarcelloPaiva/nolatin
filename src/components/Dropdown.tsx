import styled from "styled-components"
import { LabelToo } from "./"

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
    border: 3px solid var(--secondary-80);
    border-radius: 4px;
    padding: 8px;
    font-family: "Roboto Mono", sans-serif;
    font-size: "auto";
    font-weight: bold;
    line-height: "auto";
    color: var(--text-light);
  `

  const Option = styled.option``
  return (
    <InputContainer>
      <LabelToo>{label}</LabelToo>
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
