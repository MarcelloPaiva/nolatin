import styled from "styled-components"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Dropdown from "../Dropdown"
import Input from "../Input"
import { Text, Link, LabelToo } from ".."
import { ContentProps } from "./ContentProps"

const Radio = styled.input`
  flex-shrink: 28;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export default function HeadingLinkContent({
  state: { title, url, urlType, id, description },
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
            label="Heading Link Text"
            defaultValue={title}
          />
          <Input
            id={`${id}-description`}
            label="Heading Description"
            defaultValue={description}
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
          <LabelToo>Heading Link Text</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Heading Description</LabelToo>
          <Text>{description}</Text>
          <LabelToo>
            {urlType === "external"
              ? "Destination URL (external link)"
              : "Destination URL (existing page)"}
          </LabelToo>
          <Link href={url}>
            {urlType === "external"
              ? url
              : pages.filter((page) => page.id === "url")[0].title}
          </Link>
        </>
      )}
    </>
  )
}
