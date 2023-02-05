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
      <Footer />
    </RootContainer>
  )
}
