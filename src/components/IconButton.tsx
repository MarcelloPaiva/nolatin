import { RefObject } from "react"
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
  color = "var( --button-child)",
  disabled = false,
  ref,
}: IconButtonProps) {
  const buttonStyles = `
    min-width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius:8px;
    margin:4px;
    padding: 16px 0 0;
    border: 2px solid var(--secondary-20);
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
