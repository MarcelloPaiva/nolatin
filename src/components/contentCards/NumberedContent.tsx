import Input from "../Input"
import { Label } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"

export default function NumberedContent({
  state: { edit, description, id },
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
          <Label>List items</Label>
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
