import Input from "../Input"
import { Label, Text } from ".."
import { ContentProps } from "./ContentProps"
import Button from "../Button"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { ActionTypes } from "../../context/actions"
import ContentCard from "../ContentCard"

interface TitleProps extends ContentProps {
  pageId: string
  sectionId: string
}

export default function TitleContent({ pageId, sectionId, state }: TitleProps) {
  const { dispatch } = useContext(AppContext)
  return (
    <>
      {state.edit ? (
        <>
          <Input
            id={`${state.id}-title`}
            label="Title"
            defaultValue={state.title}
          />
          <Input
            id={`${state.id}-description`}
            label="Description"
            defaultValue={state.description}
          />
          <Button
            style={`
              width: 100%;
              margin-top: 16px;
              color: #0000ff;
              background-color: #f5f5f5;
            `}
            onClick={() =>
              dispatch({
                type: ActionTypes.CreateContent,
                payload: {
                  pageId,
                  sectionId,
                  parentId: state.id,
                },
              })
            }
          >
            Add content block
          </Button>
          {state.children.map((child) => (
            <ContentCard state={child} sectionId={sectionId} pageId={pageId} />
          ))}
        </>
      ) : (
        <>
          <Label>Title</Label>
          <Text>{state.title}</Text>
          <Label>Description</Label>
          <Text>{state.description}</Text>
          {state.children.map((child) => (
            <ContentCard state={child} sectionId={sectionId} pageId={pageId} />
          ))}
        </>
      )}
    </>
  )
}
