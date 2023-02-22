import { Title } from "../components/";
import Button from "../components/Button";
import Layout from "../components/Layout";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`;

export default function Guides() {
  return (
    <Layout>
      <Main>
        <section className="hero">
          <h1>Future how to section</h1>
          <p>Currently creating the images to place here. Coming soon.</p>
        </section>
        <div id="howTo01">
          <div className="post-container">
            <h2 className="post-title">
              Start by learning how to write purposeful content
            </h2>
            <div className="post-thumb">
              <img
                src="images/how-to-01.svg"
                alt=" An illustration of wireframing bars indicating the four elements of a priority guide: headline, description, role and user's expectation."
              />
            </div>
            <div className="post-content">
              <p>
                Writing priority guides provides a tool for creating purposeful
                content early. Each guide has four important elements:
                <ul>
                  <li>Headline</li>
                  <li>Description</li>
                  <li>Role</li>
                  <li>Expectations</li>
                </ul>
              </p>
              <p>
                The secret is to put a little intent - read{" "}
                <span aria-label="love">❤️</span> - on writing these simple
                guides. The goal is to create simple, but described set of
                headlines that can be read aloud to any user.
              </p>
            </div>
          </div>
        </div>
        <section id="howTo02">
          <div className="post-container">
            <h2 className="post-title">Post title</h2>
            <div className="post-thumb">
              <img src="images/how-to-02.svg" alt="decorative" />
              <figcaption>Figure caption...</figcaption>
            </div>
            <div className="post-content">
              <p> Description here ...</p>
            </div>
          </div>
        </section>
        <section id="howTo03">
          <div className="post-container">
            <h2 className="post-title">Post title</h2>
            <div className="post-thumb">
              <img src="images/how-to-03.svg" alt="decorative" />
              <figcaption>Figure caption...</figcaption>
            </div>
            <div className="post-content">
              <p> Description here ...</p>
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
  );
}
