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
        <h1>Accessibility Statement</h1>
      </Main>
    </Layout>
  )
}
