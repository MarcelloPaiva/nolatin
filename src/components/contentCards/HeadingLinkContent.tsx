import Input from "../Input"
import { Text, Link, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

export default function HeadingLinkContent({
  state: { title, url, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Heading Link Text"
            defaultValue={title}
          />
          <Input id={`${id}-url`} label="Destination URL" defaultValue={url} />
        </>
      ) : (
        <>
          <LabelToo>Heading Link Text</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination URL</LabelToo>
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
