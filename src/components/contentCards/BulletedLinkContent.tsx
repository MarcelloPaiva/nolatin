import Input from "../Input"
import { LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"

export default function BulletedLinkContent({
  state: { description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-description`}
            label={`List Items: Wrap each item in double quotes (example: "label1, url1" "label2, url2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <LabelToo>List items</LabelToo>
          <ul className="proto-mgt-list">
            {getQuoteList(description)?.map((url) => {
              const urlArray = url.split(", ")
              if (urlArray.length > 1) {
                return (
                  <li key={id + url}>
                    <a href={urlArray[1]}>{urlArray[0]}</a>
                  </li>
                )
              }
              return (
                <li key={id + url}>
                  <a href={url}>{url}</a>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}
