import Input from "../Input"
import { Text, Link, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

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
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
