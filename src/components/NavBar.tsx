import { Menu } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"
import NoLatin from "../assets/svgs/nolatinLogo.svg"

const Header = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0;
  background: var(--secondary-20);
  align-items: center;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 200px;
  border: none;
  margin: 0;
`

export default function NavBar() {
  return (
    <Header>
      <a href="/">
        <Logo
          src={NoLatin}
          alt="No Latin - A shift-left tool for product designers"
        />
      </a>
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
