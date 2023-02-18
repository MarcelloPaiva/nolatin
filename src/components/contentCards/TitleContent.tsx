import Input from "../Input"
import { LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import ContentCard from "../ContentCard"

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
  const { id, description, title, children } = state
  return (
    <>
      {edit ? (
        <>
          <Input id={`${id}-title`} label="Title" defaultValue={title} />
          <Input
            id={`${id}-description`}
            label="Description"
            defaultValue={description}
          />
        </>
      ) : (
        <>
          <LabelToo>Title</LabelToo>
          <p>{title}</p>
          <LabelToo>Description</LabelToo>
          <p>{description}</p>
          {children.map((child, index) => (
            <ContentCard
              state={child}
              parentId={id}
              sectionId={sectionId}
              pageId={pageId}
              canMoveUp={children.length > 1 && index !== 0}
              canMoveDown={children.length > 1 && index !== children.length - 1}
              key={child.id}
            />
          ))}
        </>
      )}
    </>
  )
}
