import { useContext, useEffect } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Input from "../components/Input"
import { ActionTypes } from "../context/actions"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 480px;
`

export default function Create() {
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    console.log(state)
  }, [state])

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
  }

  return (
    <Layout>
      <Root>
        <LeftTitle>Create Page</LeftTitle>
        <Input id="title" label="Title" />
        <Input id="description" label="Description" multiline />
        <Button
          style={`
            margin: 40px 0px;
            width: 100%;
        `}
          onClick={handleCreate}
        >
          Add a headline
        </Button>
      </Root>
    </Layout>
  )
}
