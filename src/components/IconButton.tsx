import React from "react"
import styled from "styled-components"
import { Icon as IconType } from "react-feather"

const Button = styled.button``

interface IconButtonProps {
  icon: IconType
  onClick: () => void
  label: string
}

export default function IconButton({
  icon: Icon,
  onClick,
  label,
}: IconButtonProps) {
  return (
    <Button onClick={onClick} aria-label={label}>
      <Icon />
    </Button>
  )
}
