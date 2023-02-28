import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Credits() {
  return (
    <Layout>
      <Main className="usability">
        <h1>User Testing Guidelines</h1>
        <p>Describe your paragraph.</p>
      </Main>
    </Layout>
  )
}
