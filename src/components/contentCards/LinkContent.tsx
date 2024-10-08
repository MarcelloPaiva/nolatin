import styled from "styled-components"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Input from "../Input"
import { Text, Link, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import Dropdown from "../Dropdown"

const Radio = styled.input`
  flex-shrink: 28;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export default function LinkContent({
  state: { title, url, urlType, id },
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
            label="Descriptive Link"
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
              label="Destination URL (existing page)"
              options={pages.map((page) => ({
                label: `${page.title} - ${page.id}`,
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
              label="Destination URL (external link)"
              defaultValue={url}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <LabelToo>Descriptive Link</LabelToo>
          <Text>{title}</Text>
          <LabelToo>
            {urlType === "external"
              ? "Destination URL (external link)"
              : "Destination URL (existing page)"}
          </LabelToo>
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
