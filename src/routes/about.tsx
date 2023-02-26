import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function About() {
  return (
    <Layout>
      <Main>
        <h1>About this project</h1>
        <p>Paragraph</p>
      </Main>
    </Layout>
  )
}
