import { useContext, useState } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Input from "../components/Input"
import { ActionTypes } from "../context/actions"
import { useNavigate } from "react-router"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export default function Create() {
  const { dispatch } = useContext(AppContext)
  const [localTitle, setLocalTitle] = useState("")
  const [localDescription, setLocalDescription] = useState("")
  const navigate = useNavigate()

  function getFormData(): { title: string; description: string } {
    const title = document.getElementById("title") as HTMLInputElement
    const description = document.getElementById(
      "description"
    ) as HTMLSelectElement
    return {
      title: title.value,
      description: description.value,
    }
  }

  function handleCreate() {
    dispatch({ type: ActionTypes.CreatePage, payload: getFormData() })
    navigate("/pages")
  }

  function handleBlur() {
    const data = getFormData()
    setLocalTitle(data.title)
    setLocalDescription(data.description)
  }

  return (
    <Layout>
      <Root>
        <LeftTitle>Create Page</LeftTitle>
        <Input
          id="title"
          label="Page Title"
          onBlur={handleBlur}
          defaultValue={localTitle}
        />
        <Input
          id="description"
          label="Description"
          onBlur={handleBlur}
          defaultValue={localDescription}
          multiline
        />
        <Button
          style={`
            margin: 40px 0px;
            width: 100%;
        `}
          onClick={handleCreate}
          disabled={localTitle === "" || localDescription === ""}
        >
          Add Page
        </Button>
      </Root>
    </Layout>
  )
}
