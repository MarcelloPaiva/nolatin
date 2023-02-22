import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

export default function HeadingContent({
  state: { title, id, description },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input id={`${id}-title`} label="Heading Text" defaultValue={title} />
          <Input
            id={`${id}-description`}
            label="Heading Description"
            defaultValue={description}
          />
        </>
      ) : (
        <>
          <LabelToo>Heading Text</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Heading Description</LabelToo>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
