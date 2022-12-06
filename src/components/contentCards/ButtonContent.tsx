import Input from "../Input"
import { Label, Text } from ".."

interface ButtonContentProps {
  edit: boolean
  label: string
  action: string
}

export default function ButtonContent({
  edit,
  label,
  action,
}: ButtonContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input label="Descriptive label" defaultValue={label} />
          <Input label="Action" defaultValue={action} />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{label}</Text>
          <Label>Action</Label>
          <Text>{action}</Text>
        </>
      )}
    </>
  )
}
