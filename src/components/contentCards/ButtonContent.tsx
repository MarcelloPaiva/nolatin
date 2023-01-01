import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function ButtonContent({
  state: { edit, description, title, id },
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
          <Input
            id={`${id}-description`}
            label="Action"
            defaultValue={description}
          />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{title}</Text>
          <Label>Action</Label>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
