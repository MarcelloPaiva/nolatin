import Input from "../Input"
import { Label, Text } from ".."

interface LinkContentProps {
  edit: boolean
  label: string
  url: string
}

export default function LinkContent({ edit, label, url }: LinkContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input label="Descriptive Link" defaultValue={label} />
          <Input label="Destination URL" defaultValue={url} />
        </>
      ) : (
        <>
          <Label>Descriptive Link</Label>
          <Text>{label}</Text>
          <Label>Destination URL</Label>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
