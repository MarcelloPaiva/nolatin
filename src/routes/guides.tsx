import { Title } from "../components/"
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
        <section className="hero">
          <h1>Future how to section</h1>
          <p>Currently creating the images to place here. Coming soon.</p>
        </section>
        <Title>Content design leads to good Accessibility</Title>
        <p>
          As UX professionals, we are committed to designing solutions as
          ambassadors for all users, including people with disabilities.
        </p>
        <p>
          This tool invites all UX designers and researchers to bring intent
          into our design process by elevating the content quality early for
          People with Disabilities.
        </p>

        <h2>Priority Guides to the rescue</h2>
        <p>
          A good way to start focusing on the content design is using a method
          called Priority Guides to evolve your content into accessible
          prototyping, which you can start evaluating with assistive
          technologies early in the design process.
        </p>
        <p>
          This content-first practice is well-described in the A List Apart's
          article{" "}
          <a
            href="https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/"
            target="_blank"
            rel="noreferrer"
          >
            <cite>
              Priority Guides: A Content-First Alternative to Wireframes
            </cite>
          </a>{" "}
          written by Heleen van Nues and Lennart Overkamp.
        </p>

        <hr className="una" />
        <blockquote>
          Simply put, a priority guide contains content and elements for a
          mobile screen, sorted by hierarchy from top to bottom and without
          layout specifications. The hierarchy is based on relevance to users,
          with the content most critical to satisfying user needs and supporting
          user (and company) goals higher up.
        </blockquote>
        <hr className="una" />

        <p>
          Priority guide contains content and elements for a mobile screen,
          sorted by hierarchy from top to bottom and without layout
          specifications. The hierarchy is based on relevance to users, with the
          content most critical to satisfying user needs. (credits)
        </p>
        <p>
          The following examples show the content hierachy for a Job Board page:
        </p>
        <Button link="/pages">Create Priority Guides</Button>
      </Main>
    </Layout>
  )
}
