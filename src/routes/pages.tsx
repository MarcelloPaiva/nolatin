import { useContext } from "react"
import styled from "styled-components"
import { Divider, Text, Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import PageCard from "../components/PageCard"
import { AppContext } from "../context/AppContext"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 480px;
`

export default function Pages() {
  const {
    state: { pages },
  } = useContext(AppContext)
  return (
    <Layout>
      <Root>
        <LeftTitle>Pages</LeftTitle>
        <Text>
          {pages.length > 0
            ? `${
                pages.length === 1
                  ? `${pages.length} page`
                  : `${pages.length} pages`
              } created so far`
            : "Start by adding a page"}
        </Text>
        {pages.map((page, index) => (
          <PageCard
            key={page.id}
            id={page.id}
            title={page.title}
            last={pages.length === index + 1}
          />
        ))}
        <Button
          style={`
            margin: 40px 0px;
            width: 100%;
        `}
          link="create"
        >
          Add a page
        </Button>
      </Root>
      <Divider />
    </Layout>
  )
}
