import { Menu } from "react-feather"
import IconButton from "./IconButton"
import styled from "styled-components"
import NoLatin from "../assets/svgs/nolatinLogo03.svg"

const Header = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0;
  align-items: center;
  background: linear-gradient(
    0.25turn,
    var(--navbar-grad-01),
    var(--navbar-grad-02),
    var(--navbar-grad-03)
  );
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
  filter: invert(21%) sepia(31%) saturate(4037%) hue-rotate(222deg)
    brightness(90%) contrast(93%);
`

export default function NavBar() {
  return (
    <Header>
      <a href="/" id="nolatin-logo">
        <Logo
          src={NoLatin}
          alt="No Latin - A shift-left tool for product designers"
        />
      </a>
      <Row>
        <nav aria-label="Primary">
          <IconButton
            size={24}
            icon={Menu}
            onClick={() => {}}
            aria="Menu"
            label="Menu"
            color="var( --secondary-80)"
            styles="color: var( --secondary-80);"
          />
        </nav>
      </Row>
    </Header>
  )
}
