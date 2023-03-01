import styled from "styled-components"
import IconButton from "../IconButton"
import PopoverMenu from "../PopoverMenu"
import { Info } from "react-feather"
import { Menu } from "@mui/material"
import { useState, useRef } from "react"

const GenHeader = styled.header`
  background-color: var(--accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
`
const Heading = styled.h1`
  color: var(--primary-light);
  margin: 0;
  margin-left: 8px;
`
const Row = styled.div`
  display: flex;
`
const Description = styled.span`
  padding: 0;
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
          <PopoverMenu
            navLabel="Page Navigation"
            buttonLabel="Navigate to another page"
            items={pages.map((page) => {
              return {
                link: `/preview/${page.id}`,
                title: page.title,
              }
            })}
          />
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
