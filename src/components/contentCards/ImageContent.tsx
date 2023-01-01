import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function ImageContent({
  state: { edit, title, url, description, id },
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
          <Text>{url}</Text>
          <Label>Caption</Label>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
