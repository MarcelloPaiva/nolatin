import React from "react"
import styled from "styled-components"
import { IconLabel } from "."
import { Icon as IconType } from "react-feather"

interface IconButtonProps {
  icon: IconType
  aria: string
  label: string
  link?: string
  onClick?: () => void
  style?: string
  size?: number
  color?: string
  disabled?: boolean
}

export default function IconButton({
  icon: Icon,
  aria,
  link,
  onClick,
  label,
  style,
  size,
  color = "#000",
  disabled = false,
}: IconButtonProps) {
  const buttonStyles = `
    min-height: 44px;
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    flex-direction: column;
    ${style}
  `

  const Button = styled.button`
    ${buttonStyles}
    &:disabled {
      color: #a8a8a8;
    }
  `
  const Link = styled.a`
    ${buttonStyles}
  `

  return link ? (
    <Link href={link} aria-label={aria}>
      <Icon size={size} color={color} />
      <IconLabel>{label}</IconLabel>
    </Link>
  ) : (
    <Button onClick={onClick} aria-label={aria} disabled={disabled}>
      <Icon size={size} color={disabled ? "#a8a8a8" : color} />
      <IconLabel>{label}</IconLabel>
    </Button>
  )
}
