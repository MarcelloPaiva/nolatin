import Input from "../Input"
import { Text } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`

export default function DropdownContent({
  state: { title, description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive label"
            defaultValue={title}
          />
          <Input
            id={`${id}-description`}
            label={`Options: Wrap each item in double quotes (example: "option1", "option2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <LabelToo>Descriptive label</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Select menu items (drop-down)</LabelToo>
          <ul>
            {getQuoteList(description)?.map((item) => (
              <li key={id + item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
