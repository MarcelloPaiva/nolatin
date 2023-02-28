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
      <Main className="credits">
        <h1>Gracias</h1>
        <p>
          We couldn't have created this accessible design solution without the
          help of these amazing people passionate about Accessibility. A special
          thanks and appreciation for my wife Juliana, for understanding how
          important this subject is to me.
        </p>
        <p>
          Thank you all for your hard work and dedication.
          <br />
          Marcelo Paiva Sr.
        </p>

        <div className="post-container">
          <h2 className="post-title">Anya Nikulina and Bruno Torquato</h2>
          <div className="post-content">
            <p>
              For starting the conversation on the content-first approach and
              for bridging that with the benefits for creating accessible
              experiences for all.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Drew Clemens</h2>
          <div className="post-content">
            <p>
              For first introducing the concept in his{" "}
              <a
                href="https://www.smashingmagazine.com/2012/05/design-process-responsive-age/"
                target="_blank"
                rel="noopener noreferrer"
              >
                article
              </a>{" "}
              on the Smashing Magazine website in 2012.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Heleen van Nues and Lennart Overkamp</h2>
          <div className="post-content">
            <p>
              For bringing the content-first back to life in this well
              illustrated article:
              <a
                href="https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <cite>
                  Priority Guides: A Content-First Alternative to Wireframes
                </cite>
              </a>
              .
            </p>
          </div>
        </div>

        <div className="post-container">
          <h2 className="post-title">Shaun Pansolli and Marta Guerra</h2>
          <div className="post-content">
            <p>
              For taking the time to test-drive our idea and providing us with
              your UX expertise and feedback.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Diego Baca and Becky Gibson</h2>
          <div className="post-content">
            <p>
              For the partnership, suggesting new features and providing
              valuable feedback, from the designer and developer perspective
              that helped us improve the app.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Claudio Luis Vera</h2>
          <div className="post-content">
            <p>
              For spreading your knowledge and passion for Accessibility to our
              South Florida UX community. There are no words to express my
              gratitude towards you for introducing me into the Accessibility
              field years ago.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Marcello "MOP" Paiva</h2>
          <div className="post-content">
            <p>
              For spending the weekends coding the backend and frontend of the
              app, bringing our vision to life. I love you son!
            </p>
          </div>
        </div>
      </Main>
    </Layout>
  )
}
