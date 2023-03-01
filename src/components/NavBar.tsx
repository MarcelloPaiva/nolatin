import PopoverMenu from "./PopoverMenu"
import styled from "styled-components"
// import NoLatin from "../assets/svgs/nolatinLogo03.svg"

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
        No Latin
        {/* <Logo
          src={NoLatin}
          alt="No Latin - A shift-left tool for product designers"
        /> */}
      </a>
      <Row>
        <PopoverMenu
          navLabel="Primary Site Navigation"
          buttonLabel="Open Site Menu"
          color="var(--light)"
          items={[
            {
              link: "/",
              title: "Home",
            },
            {
              link: "/guides",
              title: "How To",
            },
            {
              link: "/pages",
              title: "Get Started",
            },
            {
              link: "/about",
              title: "About",
            },
            {
              link: "/usability",
              title: "User Testing Guidelines",
            },
          ]}
        />
      </Row>
    </Header>
  )
}
