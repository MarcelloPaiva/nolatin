import Input from "../Input"
import { Label } from ".."
import { ContentProps } from "./ContentProps"

export default function NumberedLinkContent({
  state: { edit, description, id },
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-description`}
            label="List items in separate lines (Markdown)"
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <Label>List items</Label>
        </>
      )}
    </>
  )
}
