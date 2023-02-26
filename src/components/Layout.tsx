import { ReactNode } from "react"
import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"

interface LayoutProps {
  children?: ReactNode
  style?: string
}

export default function Layout({ children, style }: LayoutProps) {
  const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${style}
  `
  return (
    <RootContainer>
      <NavBar />
      {children}

      <hr className="una" />
      <Footer />
      <div className="post-footer">
        <p>
          <strong>No Latin</strong> is made with love by a{" "}
          <a href="/credits">bunch of folks</a> that give a damn and licensed
          under a{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/2.0/">
            Creative Commons Attribution 2.0 Generic License
          </a>
          .
        </p>
      </div>
    </RootContainer>
  )
}
