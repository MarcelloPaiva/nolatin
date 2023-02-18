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
        <section className="hero">
          <h1>Stop using 'Lorem Ipsum', it creates barriers.</h1>
          <p>
            Welcome to <strong>No Latin</strong>. Our goal is to improve
            accessibility for people with disabilities by identifying and
            eliminating the use of Latin-based scripts (a.k.a.: Lorem Ipsum) in
            the design industry.
          </p>
          <Button link="/guides">Try No Latin now</Button>
          <br />
          <p>
            Or carry on to understand how designers can create accessible
            solutions from day-1.
          </p>
        </section>
        <img src="images/InclusiveBunch.png" alt=""></img>
        <figcaption>
          An illustration of a multicultural children, including a boy in a
          wheelchair, smiling for a photo celebrating those who design with
          Accessibility in mind.
        </figcaption>
        <hr className="una" />
        <blockquote>
          <h2>The Industry Problem:</h2>
          Many UX designers and user researchers struggle to incorporate
          accessibility considerations into their design process, resulting in
          poor experiences for users with disabilities.
        </blockquote>
        <hr className="una" />
        <h2>Poor content leads to poor Accessibility:</h2>
        <p>
          Content design and Accessibility are often considered an afterthought
          in any product life-cycle.
        </p>
        <br />
        <p>
          If designers continue to use Latin content placeholders in early
          design concepts, people with disabilities that rely on assistive
          technologies (i.e.: screen readers) will continue to be excluded from
          early user research studies.
        </p>
        <hr className="una" />
        <img
          src="images/NoLorem.png"
          alt="A young blind student, wearing glasses and a backpack, walking carefully with the assistance of a white cane"
        ></img>
        <figcaption>
          A blind young man walks carefully down a hill with his friend and a
          dog on this rough terrain full of rocks. That is how most people using
          assistive technologies feel when designers don't take Accessibility
          into consideration early on.
        </figcaption>
        <h2>Poor content leads to poor Accessibility:</h2>
        <p>
          Content design and Accessibility are often considered an afterthought
          in any product life-cycle.
        </p>
        <br />
        <p>
          If designers continue to use Latin content placeholders in early
          design concepts, people with disabilities that rely on assistive
          technologies (i.e.: screen readers) will continue to be excluded from
          early user research studies.
        </p>
        <hr className="una" />
        <blockquote>
          <h2>Solution:</h2>
          Create good content from the beginning, by creating Priority Guides -
          content and elements for a mobile screen, sorted by hierarchy from top
          to bottom and without layout specifications.
        </blockquote>
        <hr className="una" />
        <h2>Priority Guides to the rescue</h2>
        <p>
          A good way to start focusing on content designing before the interface
          designing stage is using a method called "Priority Guides". This
          content-first practice is well-described in the A List Apart's article{" "}
          <a
            href="https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/"
            target="_blank"
          >
            <cite>
              Priority Guides: A Content-First Alternative to Wireframes
            </cite>
          </a>{" "}
          written by Heleen van Nues and Lennart Overkamp.
        </p>
        <h3>Priority guides are simple and quick</h3>
        <p>
          When creating these priority guide headlines you put intent on the
          user's expectations and it is as simple as following these steps:
          <ol>
            <li>Write purposeful headlines,</li>
            <li>Add a brief description for each headline,</li>
            <li>State the expected action by the user.</li>
          </ol>
          Add as many headlines, then prioritize the content and its
          accessibility needs before the interface designing. This crucial step
          will safeguard the user experience creating the opportunity to be more
          inclusive during usability studies.
        </p>
        <h2>Using the No Latin App:</h2>
        <p>
          No Latin is a tool that helps designers and researchers bringing
          intent into their design process by elevating the content quality
          early using prority guides and exporting an accessible web page that
          can be used to test with people with disabilities before the interface
          design stage.
        </p>
        <Button link="/guides">Try No Latin now</Button>
        <hr className="una" />
        <footer>Footer goes here.</footer>
      </Main>
    </Layout>
  )
}
