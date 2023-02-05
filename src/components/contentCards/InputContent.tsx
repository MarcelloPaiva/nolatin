import Input from "../Input"
import Dropdown from "../Dropdown"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"

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
  state: { title, url, id },
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
          <Dropdown
            id={`${id}-url`}
            label="Input type"
            options={inputTypes}
            defaultValue={url}
          />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{title}</Text>
          <Label>Input type</Label>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
