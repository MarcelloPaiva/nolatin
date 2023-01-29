import styled from "styled-components"
import IconButton from "../IconButton"
import { Info, Menu as Hamburger } from "react-feather"
import { StyledEngineProvider } from "@mui/material/styles"
import { Menu } from "@mui/material"
import { useState } from "react"
import { useRef } from "react"

const GenHeader = styled.header`
  background-color: var(--accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
`

const Nav = styled.nav`
  display: flex;
`

const Heading = styled.h1`
  color: var(--primary-light);
  margin: 0;
  margin-left: 8px;
`

const Row = styled.div`
  display: flex;
`

interface PageItem {
  id: string
  title: string
}

interface HeaderProps {
  pages: PageItem[]
  title: string
}

export default function Header({ pages, title }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  const handleClick = () => {
    setMenuOpen(true)
  }
  const handleClose = () => {
    setMenuOpen(false)
  }

  return (
    <GenHeader>
      <Row>
        <StyledEngineProvider injectFirst>
          <Nav aria-label="Page Navigation" ref={menuRef}>
            <IconButton
              key="page-menu"
              id="page-menu"
              size={32}
              color="var(--primary-light)"
              icon={Hamburger}
              aria="Navigate to another page"
              onClick={handleClick}
            />
            <Menu
              anchorEl={menuRef.current}
              open={menuOpen}
              onClose={handleClose}
            >
              {menuItems(pages)}
            </Menu>
          </Nav>
          <Heading>{title}</Heading>
        </StyledEngineProvider>
      </Row>
      <IconButton
        size={32}
        color="var(--primary-light)"
        icon={Info}
        aria="Page Description"
      />
    </GenHeader>
  )
}

const MenuItem = styled.a`
  padding: 16px 8px;
  text-decoration: none;
`

function menuItems(pages: PageItem[]) {
  return pages.map((page) => (
    <MenuItem href={`/preview/${page.id}`}>{page.title}</MenuItem>
  ))
}
