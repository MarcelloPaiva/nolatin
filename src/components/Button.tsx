import React from "react"
import styled from "styled-components"

interface ButtonProps {
  onClick?: () => void
  label?: string
  style?: string
  size?: number
  children?: React.ReactNode
  link?: string
}

export default function Button({
  onClick,
  label,
  style,
  children,
  link,
}: ButtonProps) {
  const buttonStyles = `
    min-height: 44px;
    min-width: 44px;
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    line-height: 26px;
    ${style}
  `

  const Button = styled.button`
    ${buttonStyles}
  `
  const Link = styled.a`
    text-decoration: none;
    ${buttonStyles}
  `

  return link ? (
    <Link href={link} aria-label={label}>
      {children}
    </Link>
  ) : (
    <Button onClick={onClick} aria-label={label}>
      {children}
    </Button>
  )
}
