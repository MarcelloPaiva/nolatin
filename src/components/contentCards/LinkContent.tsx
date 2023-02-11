import Input from "../Input"
import { Text, Link } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
`

export default function LinkContent({
  state: { title, url, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive Link"
            defaultValue={title}
          />
          <Input id={`${id}-url`} label="Destination URL" defaultValue={url} />
        </>
      ) : (
        <>
          <LabelToo>Descriptive Link</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination URL</LabelToo>
          <br />
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
