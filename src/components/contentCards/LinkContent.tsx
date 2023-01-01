import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function LinkContent({
  state: { edit, title, url, id },
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
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
