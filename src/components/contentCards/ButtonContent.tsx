import Input from "../Input"
import { Text } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`

export default function ButtonContent({
  state: { url, title, id },
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
          <Input id={`${id}-url`} label="Action" defaultValue={url} />
        </>
      ) : (
        <>
          <LabelToo>Descriptive labelToo</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination Link - enter URL</LabelToo>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
