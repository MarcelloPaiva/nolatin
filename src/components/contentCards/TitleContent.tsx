import Input from "../Input"
import { Label, Text } from ".."

interface TitleContentProps {
  edit: boolean
  title: string
  description: string
}

export default function TitleContent({
  edit,
  title,
  description,
}: TitleContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input label="Title" defaultValue={title} />
          <Input label="Description" defaultValue={description} />
        </>
      ) : (
        <>
          <Label>Title</Label>
          <Text>{title}</Text>
          <Label>Description</Label>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
