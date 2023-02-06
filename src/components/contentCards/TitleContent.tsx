import Input from "../Input"
import { ContentProps } from "./ContentProps"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import ContentCard from "../ContentCard"
import styled from "styled-components"

interface TitleProps extends ContentProps {
  pageId: string
  sectionId: string
}
const LabelToo = styled.label`
  color: var(--secondary-80);
  margin-top: 32px;
  font-size: 0.75rem;
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
        </>
      )}
    </>
  )
}
