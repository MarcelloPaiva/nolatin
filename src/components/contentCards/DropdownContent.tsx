import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"
import { getQuoteList } from "../../utilities/listUtilities"

export default function DropdownContent({
  state: { title, description, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive label"
            defaultValue={title}
          />
          <Input
            id={`${id}-description`}
            label={`Options: Wrap each item in double quotes ("option1" "option2")`}
            defaultValue={description}
            multiline
          />
        </>
      ) : (
        <>
          <Label>Descriptive label</Label>
          <Text>{title}</Text>
          <Label>Options</Label>
          <ul>
            {getQuoteList(description)?.map((item) => (
              <li key={id + item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
