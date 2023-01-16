import React from "react"
import {
  Aperture,
  Search,
  Menu,
  Home,
  LogIn,
  CornerUpLeft,
  Slash,
} from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"
import { Text } from "."

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
      <IconButton
        size={40}
        icon={Slash}
        onClick={() => {}}
        aria="No Latin - A shift-left tool for product designers"
        label="No Latin"
        color="#6f00ff"
        style="
        color:#6f00ff;
        font-weight: bold;
        "
      />
      <Row>
        <IconButton
          size={24}
          icon={Search}
          onClick={() => {}}
          aria="Search"
          label="Search"
        />
        <IconButton
          style={`margin-left: 24px;`}
          size={24}
          icon={Menu}
          onClick={() => {}}
          aria="Menu"
          label="Menu"
        />
      </Row>
    </Header>
  )
}
