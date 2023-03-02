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
        <h1>Thank you!</h1>
        <p>
          Over the past five years, I've been on a mission to find a way for
          designers to create accessible prototypes without needing to know how
          to code. Along the way, I've had the pleasure of meeting and working
          with some incredible individuals who share my passion for
          Accessibility. Together, we've collaborated to develop something that
          I truly believe is innovative and unique in the design industry. To
          all those who have supported and helped me on this journey, I am
          deeply grateful.
        </p>
        <p>
          I would like to give a special heartfelt thanks to my wife, Juliana,
          for her unwavering support and understanding of just how important
          this subject is to me. <span lang="pt">Eu te amo!</span>
        </p>
        <p>Marcelo Paiva</p>

        <div className="post-container">
          <h2 className="post-title">Anya Nikulina and Bruno Torquato</h2>
          <h3>
            <span lang="ru">Spasibo!</span> <span lang="pt">Obrigado!</span>
          </h3>
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
          <h3>Thanks!</h3>
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
          <h3>
            <span lang="nl">Bedankt!</span> <span lang="it">Grazie!</span>
          </h3>
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
          <h3>
            Thanks! <span lang="pt">Obrigado prima!</span>
          </h3>
          <div className="post-content">
            <p>
              For taking the time to test-drive our idea and providing us with
              your UX expertise and feedback.
            </p>
          </div>
        </div>
        <div className="post-container">
          <h2 className="post-title">Becky Gibson and Diego Baca</h2>
          <h3>
            Thanks! <span lang="es">Gracias!</span>
          </h3>
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
          <h3>
            <span lang="es">Gracias hermano!</span>
          </h3>
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
          <h3>
            <span lang="pt">Valeu Moleque!</span>
          </h3>
          <div className="post-content">
            <p>
              For spending the weekends coding the backend and frontend of the
              app, bringing our vision to life.{" "}
              <span lang="pt">Te amo meu filho!</span>
            </p>
          </div>
        </div>
      </Main>
    </Layout>
  )
}
