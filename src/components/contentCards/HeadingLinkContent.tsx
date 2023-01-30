import Input from "../Input"
import { Label, Text, Link } from ".."
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
          <Label>Heading Link Text</Label>
          <Text>{title}</Text>
          <Label>Destination URL</Label>
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
