import { Divider, Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Guides() {
  return (
    <Layout>
      <Main>
        <Title>No Latin</Title>
        <h2>Content design leads to good Accessibility.</h2>
        <p>
          As UX professionals, we are committed to designing solutions as
          ambassadors for all users, including people with disabilities.
        </p>
        <p>
          This tool invites all UX designers and researchers to bring intent
          into our design process by elevating the content quality early for
          People with Disabilities.
        </p>

        <h3>Step 1 - Create Priority Guides</h3>
        <p>
          A good way to start focusing on the content design is using a method
          called Priority Guides to evolve your content into accessible
          prototyping, which you can start evaluating with assistive
          technologies early in the design process.
        </p>
        <p>
          Priority guide contains content and elements for a mobile screen,
          sorted by hierarchy from top to bottom and without layout
          specifications. The hierarchy is based on relevance to users, with the
          content most critical to satisfying user needs. (credits)
        </p>
        <p>
          The following examples show the content hierachy for a Job Board page:
        </p>
        <Button styles={`margin: 40px 0px`} link="/pages">
          Create Priority Guides
        </Button>
      </Main>
    </Layout>
  )
}
