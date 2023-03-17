import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Credits() {
  return (
    <Layout>
      <Main className="workshop">
        <h1>About the Workshop</h1>
        <p>
          How might we test your hypothesis and concepts with people with
          disabilities early in the design process?
        </p>
        <p>
          This workshop will explore the content-first approach to rapid
          prototyping for people with disabilities by applying inclusive design
          methods.
        </p>
        <h2>Rapid Prototyping with Accessibility in Mind</h2>
        <p>
          Join us for a full-day, on this beginner-friendly workshop that
          explores:
        </p>
        <p>
          <ul>
            <li>
              The importance of accessibility in digital solution prototyping.
            </li>
            <li>
              Learn how to create content that's usable by all users, including
              those using assistive technology.
            </li>
            <li>
              Gain practical skills in rapid prototyping, usability studies, and
              early accessibility integration in the design process.
            </li>
          </ul>
        </p>
        <img className="landing" src="images/workshop.png" alt=""></img>
        <figcaption>
          An illustration of a multicultural group of children, including a boy
          in a wheelchair, smiling for a photo celebrating those who design with
          Accessibility in mind.
        </figcaption>

        <h2>Key Takeaways</h2>
        <ul>
          <li>
            Adopt a content-first approach to designing accessible solutions
          </li>
          <li>
            Apply usability studies to people with disabilities early in the
            design process
          </li>
          <li>
            Create and test prototypes with users with disabilities using a web
            tool
          </li>
          <li>
            Bring home a resource kit to share the importance of "shifting left"
            in the product life cycle with your team
          </li>
        </ul>
        <section>
          <h2>Contact us</h2>
          <p>
            Any interest in hosting thsi workshop for your product team? <br />
            Contact{" "}
            <a href="https://www.linkedin.com/in/mtpaiva/">Marcelo Paiva</a> via
            LinkedIn.
          </p>
        </section>
        <hr />
        <section>
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some questions we were previously asked about the workshop.
          </p>
          <h3>Who should attend this workshop?</h3>
          <p>
            This workshop is designed for beginners in the field of assistive
            technology, content creators, UX designers, and anyone interested in
            making digital solutions more accessible.
          </p>
          <h3>What will be provided in the handouts?</h3>
          <p>
            Participants will receive a PowerPoint presentation containing
            training materials, resources, and links. All materials will be
            accessible.
          </p>
          <h3>Do I need any prior experience in coding or design?</h3>
          <p>
            No prior experience in coding or design is required. This workshop
            is designed for beginners and will provide a comprehensive
            introduction to accessibility in digital solution prototyping.
          </p>
        </section>
      </Main>
    </Layout>
  )
}
