import Content from "../models/content"
import styled from "styled-components"

interface ContentProps {
  state: Content
}

const Selection = styled.div``

export default function ContentCard({ state }: ContentProps) {
  if (state.type) {
    return <Selection></Selection>
  }
  return <div></div>
}
