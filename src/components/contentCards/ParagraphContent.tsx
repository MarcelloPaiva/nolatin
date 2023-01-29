import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function ParagraphContent({
  state: { edit, title, id },
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Paragraph Text"
            defaultValue={title}
            multiline
          />
        </>
      ) : (
        <>
          <Label>Paragraph Text</Label>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}