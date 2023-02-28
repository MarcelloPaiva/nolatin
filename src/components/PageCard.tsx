import styled from "styled-components"
import { ChevronRight, Trash, Edit } from "react-feather"
import IconButton from "./IconButton"

const Row = styled.div`
  display: flex;
  align-items: center;
  // border: solid 1px blue;
  // line-height: 80px;
`

interface PageCardProps {
  id: string
  title: string
  onDelete: () => void
  onEdit: () => void
  last?: boolean
}

export default function PageCard({
  id,
  title,
  onDelete,
  onEdit,
  last = false,
}: PageCardProps) {
  const CardContainer = styled.a`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    color: var(--accent);
    text-decoration: none;
    font-size: 120%;
    font-weight: normal !important;
    border-top: 1px solid #eee;
    ${last && "border-bottom: 1px solid #eee;"}
  `

  return (
    <CardContainer href={`/page/${id}`} className="card-container">
      <h3>{title}</h3>
      <Row>
        <IconButton
          icon={Trash}
          aria={`Delete ${title} page`}
          onClick={(event) => {
            event?.preventDefault()
            onDelete()
          }}
        />
        <IconButton
          icon={Edit}
          aria={`Edit ${title} page title`}
          onClick={(event) => {
            event?.preventDefault()
            onEdit()
          }}
        />
        <ChevronRight size={32} />
      </Row>
    </CardContainer>
  )
}
