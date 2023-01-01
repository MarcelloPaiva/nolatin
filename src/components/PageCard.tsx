import styled from "styled-components"
import { ChevronRight } from "react-feather"

const PageTitle = styled.span`
  text-align: left;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 28px;
`

interface PageCardProps {
  id: string
  title: string
  last?: boolean
}

export default function PageCard({ id, title, last = false }: PageCardProps) {
  const CardContainer = styled.a`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    border-top: 1px solid #eee;
    ${last && "border-bottom: 1px solid #eee;"}
  `

  return (
    <CardContainer href={`page/${id}`}>
      <PageTitle>{title}</PageTitle>
      <ChevronRight size={24} color="#0000FF" />
    </CardContainer>
  )
}
