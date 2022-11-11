import React from "react"
import styled from "styled-components"
import { Icon as IconType } from "react-feather"

interface IconButtonProps {
  icon: IconType
  label: string
  link?: string
  onClick?: () => void
  style?: string
  size?: number
  color?: string
}

export default function IconButton({
  icon: Icon,
  link,
  onClick,
  label,
  style,
  size,
  color = "#000",
}: IconButtonProps) {
  const buttonStyles = `
    min-height: 44px;
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    ${style}
  `

  const Button = styled.button`
    ${buttonStyles}
  `
  const Link = styled.a`
    ${buttonStyles}
  `

  return link ? (
    <Link href={link} aria-label={label}>
      <Icon size={size} color={color} />
    </Link>
  ) : (
    <Button onClick={onClick} aria-label={label}>
      <Icon size={size} color={color} />
    </Button>
  )
}
