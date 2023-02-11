import Input from "../Input"
import { Text, LabelToo } from ".."
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
          <LabelToo>Heading Text</LabelToo>
          <Text>{title}</Text>
        </>
      )}
    </>
  )
}
