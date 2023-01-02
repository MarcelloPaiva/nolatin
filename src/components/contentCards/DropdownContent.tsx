import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

export default function DropdownContent({
  state: { edit, title, url, description, id },
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
            label="Options (separated by comma)"
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{title}</Text>
          <Label>Options (separated by comma)</Label>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
