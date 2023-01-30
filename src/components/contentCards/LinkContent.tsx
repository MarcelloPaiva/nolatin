import Input from "../Input"
import { Label, Text, Link } from ".."
import { ContentProps } from "./ContentProps"

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
          <Label>Descriptive Link</Label>
          <Text>{title}</Text>
          <Label>Destination URL</Label>
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
