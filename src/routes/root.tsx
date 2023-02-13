import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Root() {
  return (
    <Layout>
      <Main>
        <h1>No Latin</h1>
        <p>Tagline 1: A content-first tool for good Accessibility</p>
        <p>
          Tagline 2: A shift-left tool to help people with disabilities, one
          word at the time.
        </p>
        <hr className="una" />

        <blockquote>
          Our goal is to improve accessibility for people with disabilities by
          identifying and eliminating the use of Latin-based scripts (a.k.a.:
          Lorem Ipsum) in the design industry.
        </blockquote>
        <hr className="una" />
        <img src="images/InclusiveBunch.png" alt=""></img>
        <figcaption>
          An illustration of a multicultural children, including a boy in a
          wheelchair, smiling for a photo celebrating those who design with
          Accessibility in mind.
        </figcaption>
        <h2>The Industry Problem:</h2>
        <p>
          Many UX designers and user researchers struggle to incorporate
          accessibility considerations into their design process, resulting in
          poor experiences for users with disabilities.
        </p>
        <h2>What is No Latin?</h2>
        <p>
          No Latin is a tool that helps designers and researchers bring intent
          into their design process by elevating the content quality early for
          people with disabilities.
        </p>
        <Button styles={`margin: 40px 0px`} link="/guides">
          Try No Latin now
        </Button>
        <hr className="una" />
        <h1>Stop using 'Lorem Ipsum', it creates barriers.</h1>
        <p>
          Adding placeholders like ”Lorem ipsum” create barriers and it only
          delays any opportunity to start evaluating your design solution with
          people who relies on assistive technologies, such as screen readers.
        </p>

        <img
          src="images/NoLorem.png"
          alt="A young blind student, wearing glasses and a backpack, walking carefully with the assistance of a white cane"
        ></img>
        <figcaption>
          A young blind boy with his friend and a dog. The visually impaired kid
          walks carefully with the assistance of a white cane, because the
          terrain is rough and full of rocks. That's how most people using
          assistive technologies feel when designers don't take Accessibility
          into consideration early on.
        </figcaption>
        <h2>Inclusive Tips:</h2>
        <p>
          Creating good content is a matter of putting intent in each step of
          your design effort.
        </p>
        <p>
          Adding placeholders like ”Lorem ipsum” only create barriers to start
          evaluating your solution with people with disabilities.
        </p>

        <p>
          <h3>Instead, follow these tips:</h3>
          <ol>
            <li>Write purposeful headlines</li>
            <li>A brief description for each headline</li>
            <li>
              If there's an action to a headline, state the expected action
            </li>
          </ol>
        </p>
        <h3>Use Priority Guides as your first step</h3>
        <p>
          Priority guides prioritize the content and its accessibility needs
          before the design, ensuring that the user experience is inclusive for
          all.
        </p>
        <Button styles={`margin: 40px 0px`} link="/guides">
          Learn about Priority Guides
        </Button>
      </Main>
    </Layout>
  )
}
