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
          <h1>Adopt an Inclusive Mindset:</h1>
          <p>As the Beatles would say: "All we need is love."</p>{" "}
          <p>
            Put some love into your daily work and the result will be better for
            all users.{" "}
          </p>
        </section>
        <div id="howTo01">
          <div className="post-container">
            <h2 className="post-title">Objective: Be purposeful!</h2>
            <div className="post-thumb">
              <img
                src="images/how-to-01.svg"
                alt=" An illustration of wireframing bars indicating the four elements of a priority guide: headline, description, role and user's expectation."
              />
            </div>
            <div className="post-content">
              <p>
                Create purposeful content by writing priority guides with four
                essential elements:
              </p>
              <p>
                <ul>
                  <li>Headline,</li>
                  <li>Description,</li>
                  <li>Role,</li>
                  <li>Expectation.</li>
                </ul>
              </p>
              <p>
                <strong>
                  The objective is to create high-quality content that enables
                  the creation of a prototype that is inclusive of people with
                  disabilities, thereby facilitating their participation in
                  usability studies early in the design process.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <section id="howTo02">
          <div className="post-container">
            <h2>Focus on the content, we'll build the prototype</h2>

            <div className="post-thumb">
              <img src="images/how-to-02.svg" alt="decorative" />
            </div>
            <div className="post-content">
              <p>
                No Latin helps you creating and prioritizing the headlines in a
                page, and export an{" "}
                <strong>accessible web-based prototype</strong>.
              </p>
              <p>
                The first step is to{" "}
                <a
                  href="/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="This link will open a new tab, so you can follow along."
                >
                  create a page
                </a>
                . Then start creating multiple guides with headlines. You can
                create multiple pages if needed.
              </p>
              <p>
                As soon as you create a page, you can start previewing your
                accessible prototype.
              </p>
            </div>
          </div>
        </section>
        <section id="howTo03">
          <div className="post-container">
            <h2 className="post-title">Follow these simple steps:</h2>
            <div className="post-thumb">
              <img src="images/how-to-03.svg" alt="decorative" />
              <figcaption>Figure caption...</figcaption>
            </div>
            <div className="post-content">
              <p>
                <strong>Step 1: </strong>Add one headline, focusing on writing
                good and descriptive content;
              </p>
              <p>
                <strong>Step 2: </strong>Describe
              </p>
              <p>
                <strong>Step 3: </strong>Describe
              </p>
              <p>
                <strong>Step 4: </strong>Describe
              </p>
            </div>
          </div>
        </section>
        <section id="howTo04">
          <div className="post-container">
            <h2 className="post-title">Post title</h2>
            <div className="post-thumb">
              <img src="images/how-to-04.svg" alt="decorative" />
              <figcaption>Figure caption...</figcaption>
            </div>
            <div className="post-content">
              <p> Description here ...</p>
            </div>
          </div>
        </section>
        <hr className="una" />
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
            rel="noopener noreferrer"
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
