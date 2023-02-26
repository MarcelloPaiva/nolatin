import { useContext, useState } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Input from "../components/Input"
import { ActionTypes } from "../context/actions"
import { useNavigate } from "react-router"
import { ChevronLeft } from "react-feather"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const BackLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  border: 3px solid var(--accent);
  border-radius: 12px;
  background-color: #fff;
  color: var(--accent);
  padding: 16px;
  margin-top: 2rem;
  font-size: 120%;
  letter-spacing: 0.05rem;
  font-weight: bold;
  text-decoration: none;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export default function Create() {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  function getFormData(): { title: string; description: string } {
    const title = document.getElementById("title") as HTMLInputElement
    const description = document.getElementById(
      "description"
    ) as HTMLSelectElement
    return {
      title: title.value ?? "Rename this page",
      description:
        description.value ??
        "Don't procrastinate, add a good description to this page, screen-reader users depend on you to have a better user experience.",
    }
  }

  function handleCreate() {
    dispatch({ type: ActionTypes.CreatePage, payload: getFormData() })
    navigate("/pages")
  }

  return (
    <Layout>
      <Root role={"main"}>
        <Row>
          <BackLink href="/pages">
            <ChevronLeft />
            Back to Pages
          </BackLink>
        </Row>
        <LeftTitle>Create Page</LeftTitle>
        <Input id="title" label="Page Title" />
        <Input id="description" label="Description" multiline />
        <Button
          styles={`
            margin: 40px 0px;
            width: 100%;
        `}
          onClick={handleCreate}
        >
          Add Page
        </Button>
      </Root>
    </Layout>
  )
}
