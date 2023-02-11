import Input from "../Input"
import { LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"
import styled from "styled-components"

export default function NumberedContent({
  state: { description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-description`}
            label={`List Items: Wrap each item in double quotes ("item 1" "item2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <LabelToo>List items</LabelToo>
          <ol>
            {getQuoteList(description)?.map((item) => (
              <li key={id + item}>{item}</li>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
