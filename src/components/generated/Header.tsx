import styled from "styled-components"
import IconButton from "../IconButton"
import PopoverMenu from "../PopoverMenu"
import ExportForm from "./Export"
import { Info, Send } from "react-feather"
import { Menu, Modal } from "@mui/material"
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
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`
const ExportContainer = styled.div`
  background-color: var(--primary-light);
  margin: 1rem;
  padding: 2rem;
  border-radius: 1rem;
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
  const [exportOpen, setExportOpen] = useState(false)
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
            <Description className="page-description">{info}</Description>
          </Menu>
        </div>
      </Row>
      <InfoContainer className="proto-actions">
        <IconButton
          size={32}
          color="var(--share-label)"
          icon={Send}
          aria="Share this prototype"
          onClick={() => setExportOpen(true)}
        />
      </InfoContainer>
      <Modal open={exportOpen} onClose={() => setExportOpen(false)}>
        <ExportContainer>
          <ExportForm onClose={() => setExportOpen(false)} />
        </ExportContainer>
      </Modal>
    </GenHeader>
  )
}
