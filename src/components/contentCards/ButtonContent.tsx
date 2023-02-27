import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

export default function ButtonContent({
  state: { url, title, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive label"
            defaultValue={title}
          />
          <Input id={`${id}-url`} label="Action" defaultValue={url} />
        </>
      ) : (
        <>
          <LabelToo>Descriptive label</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination Link - enter URL</LabelToo>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
