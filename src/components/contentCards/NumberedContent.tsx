import Input from "../Input"
import { Label } from ".."

interface NumberedContentProps {
  edit: boolean
  items: string
}

export default function NumberedContent({ edit, items }: NumberedContentProps) {
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
