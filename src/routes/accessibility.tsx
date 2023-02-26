import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Accessibility() {
  return (
    <Layout>
      <Main>
        <h1>Accessibility statement for No Latin</h1>

        <p>
          We want everyone who visits the No Latin website to feel welcome and
          find the experience rewarding.
        </p>

        <h2>What are we doing?</h2>

        <p>
          To help us make the No Latin website a positive place for everyone,
          we've been using the{" "}
          <a href="http://www.w3.org/TR/WCAG/">
            Web Content Accessibility Guidelines (WCAG) 2.1
          </a>
          . These guidelines explain how to make web content more accessible for
          people with disabilities, and user friendly for everyone.
        </p>

        <p>
          The guidelines have three levels of accessibility (A, AA and AAA).
          We’ve chosen Level AA as the target for the No Latin website.
        </p>

        <h2>How are we doing?</h2>

        <p>
          We've worked hard on the No Latin website and believe we've achieved
          our goal of Level AA accessibility. We monitor the website regularly
          to maintain this, but if you do find any problems, please get in
          touch.
        </p>

        <p>
          This accessibility statement was generated on 26th February 2023 using
          the{" "}
          <a href="http://accessibilitystatementgenerator.com">
            Accessibility Statement Generator
          </a>
          , <a href="https://nomensa.com">built by Nomensa</a>.
        </p>
      </Main>
    </Layout>
  )
}
