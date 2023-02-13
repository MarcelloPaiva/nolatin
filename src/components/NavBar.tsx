import { Menu, Slash } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"

const Header = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0;
  background: var(--secondary-20);
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
        styles="color: var( --secondary-80);"
        link="/"
      />
      <Row>
        <IconButton
          size={24}
          icon={Menu}
          onClick={() => {}}
          aria="Menu"
          label="Menu"
          color="var( --secondary-80)"
          styles="color: var( --secondary-80);"
        />
      </Row>
    </Header>
  )
}
