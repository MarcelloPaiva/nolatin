import Input from "../Input"
import Dropdown from "../Dropdown"
import { Label, Text } from ".."

interface InputContentProps {
  edit: boolean
  label: string
  type: string
  placeholder: string
}

const inputTypes = [
  { label: "text", value: "text" },
  { label: "password", value: "password" },
  { label: "number", value: "number" },
  { label: "date", value: "date" },
  { label: "date and time", value: "time" },
  { label: "email", value: "email" },
  { label: "telephone", value: "tel" },
  { label: "slider range", value: "range" },
  { label: "upload file", value: "file" },
]

export default function InputContent({
  edit,
  label,
  type,
  placeholder,
}: InputContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input label="Descriptive label" defaultValue={label} />
          <Dropdown
            label="Input type"
            options={inputTypes}
            defaultValue={type}
          />
          <Input label="Placeholder" defaultValue={placeholder} />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{label}</Text>
          <Label>Input type</Label>
          <Text>{type}</Text>
          <Label>Placeholder</Label>
          <Text>{placeholder}</Text>
        </>
      )}
    </>
  )
}
