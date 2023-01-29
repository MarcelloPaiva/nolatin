import React, { RefObject } from "react"
import styled from "styled-components"
import { IconLabel } from "."
import { Icon as IconType } from "react-feather"

interface IconButtonProps {
  icon: IconType
  aria: string
  id?: string
  label?: string
  link?: string
  onClick?: (event?: any) => void
  styles?: string
  size?: number
  color?: string
  disabled?: boolean
  ref?: RefObject<HTMLButtonElement> | null
}

export default function IconButton({
  id,
  icon: Icon,
  aria,
  link,
  onClick,
  label,
  styles,
  size,
  color = "var( --secondary-80)",
  disabled = false,
  ref,
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
  `
  const Link = styled.a`
    ${buttonStyles}
    text-decoration: none;
  `

  return link ? (
    <Link href={link} aria-label={aria} id={id}>
      <Icon size={size} color={color} />
      <IconLabel>{label}</IconLabel>
    </Link>
  ) : (
    <Button
      onClick={(event) => {
        onClick && onClick(event)
      }}
      aria-label={aria}
      disabled={disabled}
      id={id}
      ref={ref}
    >
      <Icon size={size} color={disabled ? `var( --primary-30)` : color} />
      {label && (
        <IconLabel
          style={{
            color: disabled ? `var( --primary-30)` : color,
          }}
        >
          {label}
        </IconLabel>
      )}
    </Button>
  )
}
