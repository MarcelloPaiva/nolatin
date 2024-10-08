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
              value="internal"
              defaultChecked={urlType === "internal"}
            />
            <Dropdown
              id={`${id}-url-internal`}
              label="Go to page"
              options={pages.map((page) => ({
                label: `${page.title}`,
                value: page.id,
              }))}
            />
          </InputContainer>
          <InputContainer>
            <Radio
              name="urlType"
              type="radio"
              value="external"
              defaultChecked={urlType === "external"}
            />
            <Input
              id={`${id}-url-external`}
              label="Go to external link"
              defaultValue={url}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <LabelToo>Descriptive label</LabelToo>
          <Text>{title}</Text>
          <LabelToo>
            {urlType === "external" ? "Go to external link" : "Go to page"}
          </LabelToo>
          <Text>
            {urlType === "external"
              ? url
              : pages.filter((page) => page.id === url)[0]?.title ?? ""}
          </Text>
        </>
      )}
    </>
  )
}
