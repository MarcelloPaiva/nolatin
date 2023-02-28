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
          <h1>
            Stop using <span className="bad-ipsum">Lorem Ipsum</span>. It
            creates barriers.
          </h1>
          <p>
            No Latin is a free web-based app that converts priority guides into
            an accessible web prototype.
          </p>
          <p>
            Our goal is to improve the user experience for people with
            disabilities by identifying and eliminating the use of Latin-based
            scripts (<abbr title="also known as">a.k.a.</abbr>:{" "}
            <span className="bad-ipsum">Lorem Ipsum</span>) in the design
            industry.
          </p>
          <Button link="/create">
            Start prototyping with Accesibility in mind
          </Button>
          <br />
          <p>
            Continue to understand why{" "}
            <strong>
              <span className="bad-ipsum">Lorem Ipsum</span> is an act of
              exclusion.
            </strong>
          </p>
        </section>
        <img className="landing" src="images/InclusiveBunch.png" alt=""></img>
        <figcaption>
          An illustration of a multicultural children, including a boy in a
          wheelchair, smiling for a photo celebrating those who design with
          Accessibility in mind.
        </figcaption>
        <hr className="una" aria-hidden="true" />
        <blockquote>
          <h2>Industry Problem</h2>
          Most UX professionals struggle to incorporate accessibility
          considerations into their design process, resulting in poor
          experiences for users with disabilities.
          <h3>Possible Reason</h3>
          Poor content leads to poor Accessibility.
        </blockquote>

        <hr className="una" aria-hidden="true" />
        <h2>Content and Accessibility are considered an afterthought.</h2>
        <p>
          <strong>Poor content leads to poor Accessibility</strong>
          <br />
          If designers continue to use Latin content placeholders in early
          design concepts, people with disabilities that rely on assistive
          technologies (i.e.: screen readers) will continue to be excluded from
          early user research studies.
        </p>
        <img
          className="landing"
          src="images/NoLorem.png"
          alt="A young blind student, wearing glasses and a backpack, walking carefully with the assistance of a white cane"
        ></img>
        <figcaption>
          A blind young man walks carefully down a hill with his friend and a
          dog on this rough terrain full of rocks. That is how most people using
          assistive technologies feel when designers don't take Accessibility
          into consideration early on.
        </figcaption>

        <hr className="una" aria-hidden="true" />
        <blockquote>
          <h2>Solution</h2>
          Create good content from the beginning using{" "}
          <strong>Priority Guides</strong> with headlines and elements blocks,
          sorted by user needs.
        </blockquote>
        <hr className="una" aria-hidden="true" />
        <h2>Priority Guides to the rescue</h2>
        <p>
          A good way to start focusing on content designing before the interface
          designing stage is using a method called "Priority Guides". This
          content-first practice is well-described in the A List Apart's article{" "}
          <a
            href="https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <cite>
              Priority Guides: A Content-First Alternative to Wireframes
            </cite>
          </a>{" "}
          written by Heleen van Nues and Lennart Overkamp. (Thank you!)
        </p>
        <h2>Using the No Latin tool</h2>
        <p>
          This tool invites all UX professionals to bring intent into their
          design process by elevating the content quality early for people with
          disabilities.
        </p>
        <div className="site-cta">
          <Button link="/guides">Learn how</Button>
        </div>
      </Main>
    </Layout>
  )
}
