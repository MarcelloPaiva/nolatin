import { useContext, useState } from "react"
import styled from "styled-components"
import { Divider, Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import PageCard from "../components/PageCard"
import Input from "../components/Input"
import { AppContext } from "../context/AppContext"
import { Modal } from "@mui/material"
import { ActionTypes } from "../context/actions"
import Page from "../models/page"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
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
  const [openDelete, setOpenDelete] = useState<Page | null>(null)
  const [openEdit, setOpenEdit] = useState<Page | null>(null)
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
    setOpenDelete(null)
  }

  function handleEdit(id?: string) {
    const title = document.getElementById("page-title") as HTMLInputElement
    id &&
      dispatch({
        type: ActionTypes.UpdatePage,
        payload: {
          pageId: id,
          title: title.value,
        },
      })
    setOpenEdit(null)
  }

  return (
    <Layout>
      <Root>
        <Modal open={openDelete !== null} onClose={() => setOpenDelete(null)}>
          <ModalContainer>
            <p>Are you sure you want to delete the {openDelete?.title} page?</p>
            <Row>
              <Button onClick={() => setOpenDelete(null)}>Cancel</Button>
              <Button
                onClick={() => handleDelete(openDelete?.id)}
                styles="background: red"
              >
                Delete
              </Button>
            </Row>
          </ModalContainer>
        </Modal>
        <Modal open={openEdit !== null} onClose={() => setOpenEdit(null)}>
          <ModalContainer>
            <p>Edit the title of your page.</p>
            <Input
              id={"page-title"}
              label="Page Title"
              defaultValue={openEdit?.title}
            />
            <Row>
              <Button onClick={() => setOpenEdit(null)}>Cancel</Button>
              <Button
                onClick={() => handleEdit(openEdit?.id)}
                styles="background: green"
              >
                Save
              </Button>
            </Row>
          </ModalContainer>
        </Modal>
        <LeftTitle>Pages</LeftTitle>
        <div className="instructions">
          <h2>{pages.length > 0 ? "Carry on" : "Getting started"}</h2>
          <p>
            {pages.length > 0
              ? "Add more pages or click on the page name to start building your priority guides."
              : "Start by adding a page"}
          </p>
        </div>
        <br />
        {pages.map((page, index) => (
          <PageCard
            key={page.id}
            id={page.id}
            title={page.title}
            last={pages.length === index + 1}
            onDelete={() => setOpenDelete(page)}
            onEdit={() => setOpenEdit(page)}
          />
        ))}
        <Button
          styles={`
            margin: 40px 0px;
            width: 100%;
        `}
          link="/create"
        >
          Add a page
        </Button>
      </Root>
      <Divider />
    </Layout>
  )
}
