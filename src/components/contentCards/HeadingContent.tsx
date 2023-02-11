import Input from "../Input"
import { Text } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`

export default function HeadingContent({
  state: { title, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input id={`${id}-title`} label="Heading Text" defaultValue={title} />
        </>
      ) : (
        <>
          <LabelToo>Heading Text</LabelToo>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}
