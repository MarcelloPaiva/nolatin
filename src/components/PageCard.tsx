import styled from "styled-components"
import { ChevronRight, Trash } from "react-feather"
import IconButton from "./IconButton"

const PageTitle = styled.span`
  text-align: left;
  font-weight: normal;
  line-height: 80px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px blue;
  line-height: 80px;
`

interface PageCardProps {
  id: string
  title: string
  onDelete: () => void
  last?: boolean
}

export default function PageCard({
  id,
  title,
  onDelete,
  last = false,
}: PageCardProps) {
  const CardContainer = styled.a`
    width: 100%;
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
    <CardContainer href={`/page/${id}`}>
      <PageTitle>{title}</PageTitle>
      <Row>
        <IconButton
          icon={Trash}
          aria={`Delete ${title} page`}
          onClick={(event) => {
            event?.preventDefault()
            onDelete()
          }}
        />
        <ChevronRight size={32} />
      </Row>
    </CardContainer>
  )
}
