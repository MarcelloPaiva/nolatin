import Input from "../Input"
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`

export default function BulletedContent({
  state: { description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-description`}
            label={`List Items: Wrap each item in double quotes ("item 1" "item2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <LabelToo>List items</LabelToo>
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
