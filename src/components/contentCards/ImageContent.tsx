import Input from "../Input"
import { Label, Text } from ".."

interface ButtonContentProps {
  edit: boolean
  title: string
  url: string
  caption: string
}

export default function ButtonContent({
  edit,
  title,
  url,
  caption,
}: ButtonContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input label="Description" defaultValue={title} />
          <Input label="Source URL" defaultValue={url} />
          <Input label="Caption" defaultValue={caption} />
        </>
      ) : (
        <>
          <Label>Description</Label>
          <Text>{title}</Text>
          <Label>Source URL</Label>
          <Text>{url}</Text>
          <Label>Caption</Label>
          <Text>{caption}</Text>
        </>
      )}
    </>
  )
}
