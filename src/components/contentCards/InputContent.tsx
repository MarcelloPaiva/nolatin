import Input from "../Input"
import Dropdown from "../Dropdown"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

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
          <LabelToo>Descriptive label</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Input type (Set to "Text" if in doubt)</LabelToo>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
