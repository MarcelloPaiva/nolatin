import { AppContext } from "../../context/AppContext"
import Input from "../Input"
import { Text, Link, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import { useContext, useState } from "react"
import Dropdown from "../Dropdown"
import styled from "styled-components"

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
  const [url_Type, setUrlType] = useState<"external" | "internal">(
    urlType ?? "external"
  )

  return (
    <>
      {edit ? (
        <>
          <input
            id={`${id}-urlType`}
            style={{ display: "none" }}
            value={url_Type}
          />
          <Input
            id={`${id}-title`}
            label="Descriptive Link"
            defaultValue={title}
          />
          <InputContainer>
            <Radio
              name="urlType"
              type="radio"
              value="external"
              onChange={(e) =>
                setUrlType(e.target.value as "external" | "internal")
              }
            />
            <Input
              id={url_Type === "external" ? `${id}-url` : undefined}
              label="Destination URL (external link)"
              defaultValue={url}
            />
          </InputContainer>
          <InputContainer>
            <Radio
              name="urlType"
              type="radio"
              value="internal"
              onChange={(e) =>
                setUrlType(e.target.value as "external" | "internal")
              }
            />
            <Dropdown
              id={url_Type === "internal" ? `${id}-url` : undefined}
              label="Destination URL (existing page)"
              options={pages.map((page) => ({
                label: `${page.title} - ${page.id}`,
                value: page.id,
              }))}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <LabelToo>Descriptive Link</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination URL</LabelToo>
          <Link href={url}>{url}</Link>
        </>
      )}
    </>
  )
}
