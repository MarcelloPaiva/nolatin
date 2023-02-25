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
          <h1>Our objective:</h1>
          <p>
            To motivate designers to write quality content early, so that we can
            generate fully accessible prototypes for testing with people with
            disabilities.
          </p>
        </section>
        <div id="howTo01">
          <div className="post-container">
            <h2 className="post-title">Getting started</h2>
            <div className="post-thumb">
              <img
                src="images/how-to-00.svg"
                alt="An illustration of wireframing bars indicating the four essential elements of a priority guide: headline, description, role and user's expectation."
              />
            </div>
            <div className="post-content">
              <p>
                Create purposeful content by writing priority guides with four
                essential elements:
              </p>
              <p>
                <ul>
                  <li>Headline</li>
                  <li>Description</li>
                  <li>Role</li>
                  <li>Expectation</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <section id="howTo02">
          <div className="post-container">
            <h2>Create a page</h2>

            <div className="post-thumb">
              <img
                src="images/how-to-02.svg"
                alt="An illustration of wireframing page that will soon contain multiple guides with purposeful content"
              />
            </div>
            <div className="post-content">
              <p>
                <strong>No Latin</strong> helps you creating and prioritizing
                the headlines in a page, and export an{" "}
                <strong>accessible web-based prototype</strong>.
              </p>
              <p>
                Let's{" "}
                <a
                  href="/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="This link will open a new tab, so you can follow along."
                >
                  add a page
                </a>
                , then start creating multiple guides with headlines. You can
                create multiple pages if needed.
              </p>
              <p>
                As soon as you create a new page, <strong>No Latin</strong> will
                start building your accessible prototype for preview.
              </p>
            </div>
          </div>
        </section>
        <section id="howTo03">
          <div className="post-container">
            <h2 className="post-title">Create well-written headlines</h2>
            <div className="post-thumb">
              <img
                src="images/how-to-05.svg"
                alt="An illustration of wireframing page containing four guides in the order of the user needs."
              />
            </div>
            <div className="post-content">
              <p>
                <strong>Step 1: </strong>Start by adding a single headline,
                focusing on writing good and descriptive content;
              </p>
              <p>
                <strong>Step 2: </strong>Create additional headlines to address
                your user's needs.
              </p>
              <p>
                <strong>Step 3: </strong>Prioritize your headlines up or down,
                based on you think is most important for your user.
              </p>
            </div>
          </div>
        </section>
        <section id="howTo04">
          <div className="post-container">
            <h2 className="post-title">Test your prototype</h2>
            <p>
              <strong>No Latin</strong> generates web prototypes with
              Accessibility in mind by providing:
            </p>
            <div className="post-thumb">
              <img
                src="images/how-to-06.svg"
                alt="An illustration of wireframing page with properly structured headlines, with descriptive paragraphs, labels inputs and button."
              />
            </div>
            <div className="post-content">
              <p>
                <ul>
                  <li>
                    Detailed <strong>skip-links</strong>
                  </li>
                  <li>
                    Purposeful <strong>landmarks</strong>
                  </li>
                  <li>
                    Semantic <strong>headings</strong>
                  </li>
                  <li>
                    Good <strong>aria</strong> attributes
                  </li>
                  <li>
                    Image <strong>alternative</strong> text
                  </li>
                  <li>
                    Visual <strong>focus</strong> appearance
                  </li>
                </ul>
              </p>
              <p>All that before designing or developing anything!</p>{" "}
              <p>
                We believe this method will enable UX professionals including
                people with disabilities early in the design process, this
                approach is known as "<strong>shift-left</strong>".{" "}
              </p>
            </div>
          </div>
        </section>
        <hr className="una" />
        <h2>Content design leads to good Accessibility</h2>
        <p>
          As UX professionals, you are committed to designing solutions as
          ambassadors for all users, including people with disabilities.
        </p>
        <p>
          This tool invites all designers and researchers to bringing intent
          into their design process by elevating the content quality early for
          people with disabilities.
        </p>

        <h3>Prototyping with Accessibility in mind</h3>

        <p>
          As simple as 1, 2, 3:
          <ul>
            <li>Create a page</li>
            <li>Add headlines</li>
            <li>Prioritize them</li>
            <li>Test with all users!</li>
          </ul>
        </p>
        <Button link="/pages">Start prototyping</Button>
      </Main>
    </Layout>
  )
}
