import { Menu } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"
import NoLatin from "../assets/svgs/nolatinLogo03.svg"

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
  width: 160px;
  border: none;
  margin: 0;

  /* change color: https://codepen.io/sosuke/pen/Pjoqqp */
  filter: invert(8%) sepia(85%) saturate(5996%) hue-rotate(244deg)
    brightness(101%) contrast(102%);
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
