import React from "react"
import { Menu, Slash, FastForward } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"
import { Text } from "."

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 8px var(--secondary-20);
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function NavBar() {
  return (
    <Header>
      <IconButton
        size={60}
        icon={Slash}
        onClick={() => {}}
        aria="No Latin - A shift-left tool for product designers"
        label="No Latin"
        color="var( --secondary-80)"
        style="
        color: var( --secondary-80);
        "
      />
      <Row>
        <IconButton
          size={24}
          icon={FastForward}
          onClick={() => {}}
          aria="Skip to"
          label="Skip To"
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
