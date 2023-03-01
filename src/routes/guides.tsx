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
        <h1>Step by step guide</h1>
        <div className="post-container">
          <h2 className="post-title">1. Adopt a content-first mindset</h2>
          <div className="post-content">
            <p>
              If you haven't done so, this is a good time to pause and read the
              following article{" "}
              <a
                href="https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <cite>
                  Priority Guides: A Content-First Alternative to Wireframes
                </cite>
              </a>
              . It will make you a better human.
            </p>
            <h3>What are prioritized content guides?</h3>
            <p>
              Priority guide contains content and elements for a mobile screen,
              sorted by hierarchy from top to bottom and without layout
              specifications. The hierarchy is based on relevance to users, with
              the content most critical to satisfying user needs and supporting
              user (and company) goals higher up.
            </p>
          </div>
        </div>
        <div id="howTo01">
          <div className="post-container">
            <h2 className="post-title">2. Master your content guides</h2>
            <div className="post-thumb">
              <img
                src="images/how-to-00.svg"
                alt="An illustration of wireframing bars indicating the four essential elements of a priority guide: headline, description, role and user's expectation."
              />
            </div>
            <div className="post-content">
              <p>
                Create purposeful content by writing content guides with four
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
              <p>
                Your priority guide should only contain real content that's
                relevant to the user.{" "}
                <span className="bad-ipsum">Lorem ipsum</span>, or any other
                type of placeholder text, doesn't communicate how the page
                supports users in reaching their goals.
              </p>
            </div>
          </div>
        </div>
        <section id="howTo02">
          <div className="post-container">
            <h2>3. Use No Latin to create your content guides</h2>

            <div className="post-thumb">
              <img
                src="images/how-to-02.svg"
                alt="An illustration of wireframing page that will soon contain multiple guides with purposeful content"
              />
            </div>
            <div className="post-content">
              <p>
                <strong>No Latin</strong> helps you creating and prioritizing
                the content guides in a web page, and export an accessible web
                page to test with screen-reader users, for example. .
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
            <h2 className="post-title">4. Create intentful headlines</h2>
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
            <h2 className="post-title">5. Test your prototype</h2>
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
              <p>
                <strong>
                  All free for our UX community to use before starting the
                  interface designing phase.
                </strong>
              </p>
              <p>
                We believe this method will enable UX professionals to be
                proactive about including people with disabilities early in the
                design process; this approach is known as "
                <strong>shift-left</strong>."
              </p>
              <h3>Including people with disabilities in Usability studies</h3>
              <p>
                We created a <a href="/usability">user testing guidelines</a> on
                how to provide proper accomodations for assistive technology
                users during your usability studies.{" "}
              </p>
            </div>
          </div>
        </section>
        <hr aria-hidden="true" />
        <h2>Conclusion: Content design leads to good Accessibility</h2>
        <p>
          As UX professionals, you are committed to designing solutions as
          ambassadors for all users, including people with disabilities.
        </p>
        <p>
          This tool invites all designers and researchers to bringing intent
          into their design process by elevating the content quality early for
          people with disabilities.
        </p>
        <div className="site-cta">
          <Button link="/pages">Start prototyping</Button>
        </div>
      </Main>
    </Layout>
  )
}
