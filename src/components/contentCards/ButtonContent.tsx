import styled from "styled-components"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Dropdown from "../Dropdown"
import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

const Radio = styled.input`
  flex-shrink: 28;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export default function ButtonContent({
  state: { url, urlType, title, id },
  edit,
}: ContentProps) {
  const {
    state: { pages },
  } = useContext(AppContext)
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive label"
            defaultValue={title}
          />
          <InputContainer>
            <Radio
              name="urlType"
              type="radio"
              value="external"
              defaultChecked={urlType === "external"}
            />
            <Input
              id={`${id}-url-external`}
              label="Action URL (external link)"
              defaultValue={url}
            />
          </InputContainer>
          <InputContainer>
            <Radio
              name="urlType"
              type="radio"
              value="internal"
              defaultChecked={urlType === "internal"}
            />
            <Dropdown
              id={`${id}-url-internal`}
              label="Action URL (existing page)"
              options={pages.map((page) => ({
                label: `${page.title} - ${page.id}`,
                value: page.id,
              }))}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <LabelToo>Descriptive label</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination Link - enter URL</LabelToo>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
