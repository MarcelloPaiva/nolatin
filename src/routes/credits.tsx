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
      <Main>
        <h1>Thank you</h1>
        <p>
          We couldn't have created this accessible design solution without the
          help of these amazing volunteers:
        </p>

        <ul>
          <li>
            <strong>Jessica</strong> - for designing the beautiful logo that
            perfectly represents our app.
          </li>
          <li>
            <strong>Michael</strong> - for writing the clear and concise
            documentation that guides our users.
          </li>
          <li>
            <strong>Emily</strong> - for testing the app on different devices
            and browsers, ensuring it works for everyone.
          </li>
          <li>
            <strong>David</strong> - for suggesting new features and providing
            valuable feedback that helped us improve the app.
          </li>
          <li>
            <strong>Olivia</strong> - for creating the fun and engaging tutorial
            videos that make learning how to use our app a breeze.
          </li>
          <li>
            <strong>Samuel</strong> - for coding the backend and frontend of the
            app, bringing our vision to life.
          </li>
        </ul>
        <p>
          Thank you all for your hard work and dedication. We are forever
          grateful!
        </p>
      </Main>
    </Layout>
  )
}
