import Input from "../Input"
import { Label } from ".."

interface BulletedContentProps {
  edit: boolean
  items: string
}

export default function BulletedContent({ edit, items }: BulletedContentProps) {
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
