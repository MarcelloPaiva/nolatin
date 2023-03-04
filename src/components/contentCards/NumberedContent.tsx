import Input from "../Input"
import { LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"

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
          <ol className="proto-mgt-list">
            {getQuoteList(description)?.map((item) => (
              <li key={id + item}>{item}</li>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
