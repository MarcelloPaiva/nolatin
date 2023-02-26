import { useContext } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import SectionCard from "../components/SectionCard"
import Layout from "../components/Layout"
import Section from "../models/section"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import { ActionTypes } from "../context/actions"
import { ChevronLeft, ExternalLink } from "react-feather"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const BackLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  border-radius: 12px;
  border: var(--buttonSecondary-borderWidth) solid var(--buttonSecondary-border);
  background-color: var(--buttonSecondary-bg);
  color: var(--buttonSecondary-label);
  padding: 16px;
  margin-top: 2rem;
  font-size: 120%;
  letter-spacing: 0.05rem;
  font-weight: bold;
  text-decoration: none;
`
const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Page() {
  const { id } = useParams()
  const { dispatch, getPage } = useContext(AppContext)
  const page = getPage(id ?? "")

  function renderCards(sectionsData: Section[], id: string) {
    return sectionsData.map((section, index) => {
      console.log(index)
      return (
        <SectionCard
          key={section.id}
          pageId={id}
          state={section}
          canMoveUp={sectionsData.length > 1 && index !== 0}
          canMoveDown={
            sectionsData.length > 1 && index !== sectionsData.length - 1
          }
        />
      )
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
          <Row>
            <Title>{page.title}</Title>
          </Row>
          <Row>
            <p>{page.description}</p>
          </Row>
          <Row className="toolbar">
            <BackLink href="/pages">
              <ChevronLeft />
              Back
            </BackLink>
            <Button link={`/preview/${id}`} newTab>
              Preview &nbsp; <ExternalLink />
            </Button>
          </Row>
          <div className="instructions">
            <h2>Next steps:</h2>
            <p>
              Add as many headlines you want, but please remember to be
              descriptive. Afterall, not everyone rely on visual interface
              elements.
            </p>
          </div>
          <Column className="page-box">
            {renderCards(page.sections, page.id)}
          </Column>
          <Button
            onClick={() =>
              dispatch({
                type: ActionTypes.CreateSection,
                payload: { pageId: page.id },
              })
            }
            styles="
            margin-bottom:32px;
            "
          >
            Add new headline
          </Button>
        </Root>
      </Layout>
    )
  } else return <Title>Page not found.</Title>
}
