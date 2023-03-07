import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Send() {
  return (
    <Layout>
      <Main>
        <header>
          <h1>Manual Data Entry</h1>
        </header>
        <main>
          <form
            method="post"
            action="https://api.nolatin.com/json/save.php"
            title="JSON Input Form"
          >
            <div>
              <div>
                <section>
                  <label>Friendly Name:</label>
                  <input
                    type="text"
                    name="friendly_name"
                    id="friendly_name"
                    placeholder="Enter a friendly name for the JSON content"
                  />
                </section>
                <section>
                  <label>JSON Content:</label>
                  <textarea
                    name="json_content"
                    id="json_content"
                    placeholder="Enter the JSON content"
                  ></textarea>
                </section>
                <section>
                  <label>Email Address:</label>
                  <input
                    type="email"
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Enter your email address"
                  />
                </section>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </main>
        <footer>
          <p>&copy; 2023. All rights reserved.</p>
        </footer>
      </Main>
    </Layout>
  )
}
