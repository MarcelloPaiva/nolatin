import React from "react"
import { Aperture, Search, Menu } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 2px #000000;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function NavBar() {
  return (
    <Header>
      <IconButton size={40} icon={Aperture} link="/" label="Logo" />
      <Row>
        <IconButton size={24} icon={Search} onClick={() => {}} label="Search" />
        <IconButton
          styles={`margin-left: 24px;`}
          size={24}
          icon={Menu}
          onClick={() => {}}
          label="Menu"
        />
      </Row>
    </Header>
  )
}
