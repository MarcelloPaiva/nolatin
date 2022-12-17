import Input from "../Input"
import { Label } from ".."

interface BulletedLinkContentProps {
  edit: boolean
  items: string
}

export default function BulletedLinkContent({
  edit,
  items,
}: BulletedLinkContentProps) {
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
