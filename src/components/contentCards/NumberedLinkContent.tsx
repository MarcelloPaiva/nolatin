import Input from "../Input"
import { Label } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"

export default function NumberedLinkContent({
  state: { description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-description`}
            label={`List Items: Wrap each item in double quotes ("url1" "url2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <Label>List items</Label>
          <ol>
            {getQuoteList(description)?.map((url) => (
              <li key={id + url}>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
