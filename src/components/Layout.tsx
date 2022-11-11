import React from "react"
import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"

interface LayoutProps {
  children?: React.ReactNode
  style?: string
}

export default function Layout({ children, style }: LayoutProps) {
  const RootContainer = styled.div`
    margin-top: 40px;
    margin-left: 48px;
    margin-right: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
