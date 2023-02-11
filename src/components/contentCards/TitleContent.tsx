import Input from "../Input"
import { LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import ContentCard from "../ContentCard"
import styled from "styled-components"

interface TitleProps extends ContentProps {
  pageId: string
  sectionId: string
}

export default function TitleContent({
  pageId,
  sectionId,
  state,
  edit,
}: TitleProps) {
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
