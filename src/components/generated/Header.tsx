import styled from "styled-components"
import IconButton from "../IconButton"
import { Info, Menu } from "react-feather"

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

interface HeaderProps {
  pages: string[]
  title: string
}

export default function Header({ pages, title }: HeaderProps) {
  return (
    <GenHeader>
      <Row>
        <Nav aria-label="Page Navigation">
          <IconButton
            size={32}
            color="var(--primary-light)"
            icon={Menu}
            aria="Navigate to another page"
          />
        </Nav>
        <Heading>{title}</Heading>
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
