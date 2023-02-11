import Input from "../Input"
import { Link, Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

const Image = styled.img`
  border: 1px solid #a8a8a8;
  width: 100%;
  margin-top: 16px;
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
          <LabelToo>Description</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Source URL</LabelToo>
          <Link href={url}>{url}</Link>
          <Image src={url} alt={title} />
          <br />
          <LabelToo>Caption</LabelToo>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
