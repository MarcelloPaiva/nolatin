import Input from "../Input"
import { Label, Link, Text } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const Image = styled.img`
  border: 1px solid #a8a8a8;
  width: 100%;
`

export default function ImageContent({
  state: { title, url, description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input id={`${id}-title`} label="Description" defaultValue={title} />
          <Input id={`${id}-url`} label="Source URL" defaultValue={url} />
          <Input
            id={`${id}-description`}
            label="Caption"
            defaultValue={description}
          />
        </>
      ) : (
        <>
          <Label>Description</Label>
          <Text>{title}</Text>
          <Label>Source URL</Label>
          <Link href={url}>{url}</Link>
          <Image src={url} alt={title} />
          <Label>Caption</Label>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
