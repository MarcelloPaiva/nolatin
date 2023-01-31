import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function HeadingContent({
  state: { title, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input id={`${id}-title`} label="Heading Text" defaultValue={title} />
        </>
      ) : (
        <>
          <Label>Heading Text</Label>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}
