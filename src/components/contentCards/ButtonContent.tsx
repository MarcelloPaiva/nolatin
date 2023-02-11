import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

export default function ButtonContent({
  state: { description, title, id },
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
          <Input
            id={`${id}-description`}
            label="Action"
            defaultValue={description}
          />
        </>
      ) : (
        <>
          <LabelToo>Descriptive labelToo</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Action</LabelToo>
          <Text>{description}</Text>
        </>
      )}
    </>
  )
}
