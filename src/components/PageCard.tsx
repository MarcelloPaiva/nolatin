import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import styled from "styled-components"
import { ChevronRight, Trash } from "react-feather"
import IconButton from "./IconButton"
import { ActionTypes } from "../context/actions"

const PageTitle = styled.span`
  text-align: left;
  font-weight: bold;
  // font-size: 1.25rem;
  line-height: 28px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

interface PageCardProps {
  id: string
  title: string
  last?: boolean
}

export default function PageCard({ id, title, last = false }: PageCardProps) {
  const { dispatch } = useContext(AppContext)
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
      <Row>
        <IconButton
          icon={Trash}
          aria={`Delete ${title} page`}
          onClick={(event) => {
            event?.preventDefault()
            dispatch({
              type: ActionTypes.DeletePage,
              payload: {
                pageId: id,
              },
            })
          }}
        />
        <ChevronRight size={24} color="#0000FF" />
      </Row>
    </CardContainer>
  )
}
