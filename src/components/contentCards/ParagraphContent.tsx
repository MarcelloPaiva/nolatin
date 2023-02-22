import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

export default function ParagraphContent({
  state: { title, id },
  edit,
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
          <LabelToo>Paragraph Text</LabelToo>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}
