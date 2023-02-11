import styled from "styled-components"
import IconButton from "../IconButton"
import { Info, Menu as Hamburger } from "react-feather"
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
  flex-direction: column;
  justify-content: center;
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
  info: string
}

export default function Header({ pages, info, title }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const handleMenuClick = () => {
    setMenuOpen(true)
  }
  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  const [infoOpen, setInfoOpen] = useState(false)
  const infoRef = useRef<HTMLDivElement>(null)
  const handleInfoClick = () => {
    setInfoOpen(true)
  }
  const handleInfoClose = () => {
    setInfoOpen(false)
  }

  return (
    <GenHeader>
      <Row>
        {pages.length > 1 && (
          <Nav aria-label="Page Navigation" ref={menuRef}>
            <IconButton
              key="page-menu"
              id="page-menu"
              size={32}
              color="var(--primary-light)"
              icon={Hamburger}
              aria="Navigate to another page"
              onClick={handleMenuClick}
            />
            <Menu
              anchorEl={menuRef.current}
              open={menuOpen}
              onClose={handleMenuClose}
            >
              <Nav>{menuItems(pages)}</Nav>
            </Menu>
          </Nav>
        )}
        <Heading>{title}</Heading>
      </Row>
      <div ref={infoRef}>
        <IconButton
          size={32}
          color="var(--primary-light)"
          icon={Info}
          aria="Page Description"
          onClick={handleInfoClick}
        />
        <Menu
          anchorEl={infoRef.current}
          open={infoOpen}
          onClose={handleInfoClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Description>{info}</Description>
        </Menu>
      </div>
    </GenHeader>
  )
}

const Description = styled.span`
  padding: 16px 8px;
`

const MenuItem = styled.a`
  padding: 8px;
  text-decoration: none;
`

function menuItems(pages: PageItem[]) {
  return pages.map((page) => (
    <MenuItem href={`/preview/${page.id}`}>{page.title}</MenuItem>
  ))
}
