import { useContext, useState } from "react"
import styled from "styled-components"
import { Divider, Text, Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import PageCard from "../components/PageCard"
import { AppContext } from "../context/AppContext"
import { Modal } from "@mui/material"
import { ActionTypes } from "../context/actions"
import Page from "../models/page"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-light);
  padding: 24px;
  margin: 40px;
  border-radius: 8px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`

export default function Pages() {
  const [open, setOpen] = useState<Page | null>(null)
  const {
    state: { pages },
    dispatch,
  } = useContext(AppContext)

  function handleDelete(id?: string) {
    id &&
      dispatch({
        type: ActionTypes.DeletePage,
        payload: {
          pageId: id,
        },
      })
    setOpen(null)
  }

  return (
    <Layout>
      <Root>
        <Modal open={open !== null} onClose={() => setOpen(null)}>
          <ModalContainer>
            <p>Are you sure you want to delete the {open?.title} page?</p>
            <Row>
              <Button onClick={() => setOpen(null)}>Cancel</Button>
              <Button
                onClick={() => handleDelete(open?.id)}
                styles="background: red"
              >
                Delete
              </Button>
            </Row>
          </ModalContainer>
        </Modal>
        <LeftTitle>Pages</LeftTitle>
        <Text>
          {pages.length > 0
            ? `You have created ${
                pages.length === 1
                  ? `${pages.length} page`
                  : `${pages.length} pages`
              } so far`
            : "Start by adding a page"}
        </Text>
        {pages.map((page, index) => (
          <PageCard
            key={page.id}
            id={page.id}
            title={page.title}
            last={pages.length === index + 1}
            onDelete={() => setOpen(page)}
          />
        ))}
        <Button
          styles={`
            margin: 40px 0px;
            width: 100%;
        `}
          link="create"
        >
          Add a page
        </Button>
      </Root>
      <Divider />
    </Layout>
  )
}
