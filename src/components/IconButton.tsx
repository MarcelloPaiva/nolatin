import React from "react"
import styled from "styled-components"
import { IconLabel } from "."
import { Icon as IconType } from "react-feather"

interface IconButtonProps {
  icon: IconType
  aria: string
  label?: string
  link?: string
  onClick?: () => void
  styles?: string
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
  styles,
  size,
  color = "var( --secondary-80)",
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
    color: var(--secondary-80);
    flex-direction: column;
    ${styles}
  `

  const Button = styled.button`
    ${buttonStyles}
    &:disabled {
      color: var(--primary-30);
    }
  `
  const Link = styled.a`
    ${buttonStyles}
    text-decoration: none;
  `

  return link ? (
    <Link href={link} aria-label={aria}>
      <Icon size={size} color={color} />
      <IconLabel>{label}</IconLabel>
    </Link>
  ) : (
    <Button onClick={onClick} aria-label={aria} disabled={disabled}>
      <Icon size={size} color={disabled ? "#var( --primary-30)" : color} />
      {label && <IconLabel>{label}</IconLabel>}
    </Button>
  )
}
