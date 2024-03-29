import styled from "styled-components"
import IconButton from "./IconButton"
import { Menu, MenuItem, PopoverOrigin, PopoverPosition } from "@mui/material"
import { Menu as Hamburger } from "react-feather"
import { useState, useRef } from "react"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

interface MenuItemProps {
  link: string
  title: string
}

interface HeaderProps {
  buttonLabel: string
  navLabel: string
  items: MenuItemProps[]
  color?: string
  anchorPosition?: PopoverPosition
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
}

export default function PopoverMenu({
  navLabel,
  buttonLabel,
  items,
  color,
  anchorPosition,
  anchorOrigin,
  transformOrigin,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLButtonElement>(null)

  const handleMenuClick = () => {
    setMenuOpen(true)
    setTimeout(() => {
      const firstItem = document.getElementById(`${items[0].title}-0`)
      firstItem?.focus()
    }, 1)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <Nav aria-label={navLabel} ref={menuRef}>
        <IconButton
          size={32}
          color={color ?? "var(--primary-light)"}
          icon={Hamburger}
          aria={buttonLabel}
          onClick={handleMenuClick}
        />
      </Nav>
      <Menu
        anchorEl={menuRef.current}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={anchorOrigin}
        anchorPosition={anchorPosition}
        transformOrigin={transformOrigin}
      >
        <Nav className="menu-popover">{menuItems(items)}</Nav>
      </Menu>
    </>
  )
}

function menuItems(items: MenuItemProps[]) {
  return items.map((item, index) => (
    <MenuItem component="a" id={`${item.title}-${index}`} href={item.link}>
      {item.title}
    </MenuItem>
  ))
}
