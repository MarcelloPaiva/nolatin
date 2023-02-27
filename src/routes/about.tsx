import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function About() {
  return (
    <Layout>
      <Main>
        <h1>Why we created No Latin</h1>
        <p>
          Once upon a time, there was a team of designers and developers who
          were passionate about creating accessible solutions for everyone. They
          noticed that many websites and applications relied heavily on Latin
          placeholder text, which made it difficult for getting feedback from
          people that use assistive technologies.
        </p>

        <img
          className="landing"
          src="images/ourStory.png"
          alt="A group of children seating on a quietly observing the sunset."
        ></img>
        <figcaption>
          A group of children seating quietly, on top of hill, looking far away
          as if something is about to happen. They have played hard all day, and
          are now awaiting for your feedback. If you have any ideas or comments,
          please{" "}
          <a href="https://github.com/MarcelloPaiva/nolatin/issues/new/choose">
            create an issue on github
          </a>
          .
        </figcaption>
        <p>
          So, the team decided to create a tool that would help designers and
          researchers create accessible designs without relying on Latin
          placeholder text. They called it "No Latin" and set out to make it a
          user-friendly and comprehensive solution.
        </p>
        <p>
          As they worked on "No Latin," the team discovered that their tool
          could make a real difference in the world. They realized that by
          creating more inclusive designs, they could help people from diverse
          backgrounds feel seen and heard in the digital world.
        </p>
        <p>
          So, the team poured their hearts and souls into "No Latin," and with
          the help of <a href="/credits">some amazing volunteers</a>, they
          created an app that truly made a difference. They were proud to have
          created a solution that made the digital world more accessible to
          everyone, and they hope to make a positive impact in the world.
        </p>
        <p>
          And so, the team continues to work on "No Latin," striving to make it
          even better and more inclusive. They know that their work is far from
          over, but they are excited to keep making a difference, one accessible
          design at a time.
        </p>
        <p>
          <strong>To be continued...</strong>
        </p>
        <p>
          Made with <span aria-label="love">❤️</span> by{" "}
          <a href="/credits">a bunch of people</a> that{" "}
          <a href="https://github.com/MarcelloPaiva/nolatin/issues/new/choose">
            give a damn
          </a>
          .
        </p>
      </Main>
    </Layout>
  )
}
