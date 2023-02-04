import Input from "../Input"
import { ContentProps } from "./ContentProps"
import Button from "../Button"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { ActionTypes } from "../../context/actions"
import ContentCard from "../ContentCard"
import styled from "styled-components"

interface TitleProps extends ContentProps {
  pageId: string
  sectionId: string
}
const LabelToo = styled.label`
  color: var(--primary-60);
  margin-top: 32px;
  font-size: 1rem;
`

export default function TitleContent({
  pageId,
  sectionId,
  state,
  edit,
}: TitleProps) {
  const { dispatch } = useContext(AppContext)
  return (
    <>
      {edit ? (
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
        </>
      ) : (
        <>
          <LabelToo>Title</LabelToo>
          <p>{state.title}</p>
          <LabelToo>Description</LabelToo>
          <p>{state.description}</p>
          {state.children.map((child) => (
            <ContentCard
              state={child}
              sectionId={sectionId}
              pageId={pageId}
              key={child.id}
            />
          ))}

          <Button
            styles={`
              width: 100%;
              margin-top: 16px;
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
        </>
      )}
    </>
  )
}
