import React from "react"
import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"

export const RootContainer = styled.div`
  margin-top: 40px;
  margin-left: 48px;
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <RootContainer>
      <NavBar />
      {children}
      <Footer />
    </RootContainer>
  )
}
