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

export default function NavBar() {
  return (
    <Header>
      <a href="/" id="nolatin-logo">
        No<span className="bad-ipsum">Latin</span>
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
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          items={[
            {
              link: "/",
              title: "Home",
            },
            {
              link: "/guides",
              title: "How To Guides",
            },
            {
              link: "/pages",
              title: "Start Prototyping",
            },
            {
              link: "/workshop",
              title: "Hands-on Workshop",
            },
            {
              link: "/usability",
              title: "User Testing Guidelines",
            },
            {
              link: "/about",
              title: "About This Project",
            },
          ]}
        />
      </Row>
    </Header>
  )
}
