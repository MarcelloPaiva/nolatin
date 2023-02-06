import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`
export default function ParagraphContent({
  state: { title, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Paragraph Text"
            defaultValue={title}
            multiline
          />
        </>
      ) : (
        <>
          <LabelToo>Paragraph Text</LabelToo>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}
