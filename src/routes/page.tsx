import { useContext } from "react"
import { SubTitle, Text, Title } from "../components/"
import Button from "../components/Button"
import SectionCard from "../components/SectionCard"
import Layout from "../components/Layout"
import Section from "../models/section"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import { ActionTypes } from "../context/actions"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export default function Page() {
  const { id } = useParams()
  const { dispatch, getPage } = useContext(AppContext)
  const page = getPage(id ?? "")
  console.log("PAGE PAGE", id)

  function renderCards(sectionsData: Section[], id: string) {
    return sectionsData.map((section) => {
      return <SectionCard key={section.id} pageId={id} state={section} />
    })
  }
  if (page) {
    return (
      <Layout
        style={`
          h1 {
            align-self: flex-start;
          }
      `}
      >
        <Root>
          <Title>{page.title}</Title>
          <Text>Step 1</Text>
          <SubTitle>Priority Guides</SubTitle>
          <Text>Create</Text>
          <Text>Add as many headlines you think your view would require.</Text>
          <Column>{renderCards(page.sections, page.id)}</Column>
          <Button
            onClick={() =>
              dispatch({
                type: ActionTypes.CreateSection,
                payload: { pageId: page.id },
              })
            }
          >
            Add a headline
          </Button>
        </Root>
      </Layout>
    )
  } else return <Title>Page not found.</Title>
}
