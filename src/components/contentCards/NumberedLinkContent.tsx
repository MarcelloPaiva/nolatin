import Input from "../Input"
import { Label } from ".."

interface NumberedLinkContentProps {
  edit: boolean
  items: string
}

export default function NumberedLinkContent({
  edit,
  items,
}: NumberedLinkContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            label="List items in separate lines (Markdown)"
            defaultValue={items}
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
