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
      <Layout>
        <Root>
          <div className="instructions">
            <h2>Next steps:</h2>
            <p>
              Add as many headlines you want, but please remember to be
              descriptive. Afterall, not everyone rely on visual interface
              elements.
            </p>
          </div>

          <Row className="toolbar">
            <BackLink href="/pages">
              <ChevronLeft />
              Back
            </BackLink>
            <div className="preview">
              <Button link={`/preview/${id}`} newTab>
                Preview &nbsp; <ExternalLink />
              </Button>
            </div>
          </Row>
          <Row className="proto-mgt-header">
            <div className="proto-mgt">
              <div className="proto-mgt-cat">Prototype page title:</div>
              <h1>{page.title}</h1>
              <div className="proto-mgt-cat">Prototype page description:</div>
              <p className="proto-mgt-desc">{page.description}</p>
            </div>
          </Row>
          <Column className="page-box">
            {renderCards(page.sections, page.id)}
          </Column>
          <hr className="page-end" />
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
