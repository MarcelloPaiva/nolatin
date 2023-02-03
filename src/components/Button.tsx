import React from "react"
import styled from "styled-components"

interface ButtonProps {
  onClick?: () => void
  label?: string
  style?: string
  size?: number
  children?: React.ReactNode
  link?: string
  disabled?: boolean
  newTab?: boolean
}

export default function Button({
  onClick,
  label,
  style,
  children,
  link,
  disabled,
  newTab,
}: ButtonProps) {
  const buttonStyles = `
  font-family: "Roboto", sans-serif;  
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    background-color: var(--secondary-100);
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem; 
    line-height: 1.2rem;
    margin-top: 2rem;
    letter-spacing: 0.025rem;
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
    <Link href={link} aria-label={label} target={newTab ? "_blank" : undefined}>
      {children}
    </Link>
  ) : (
    <Button onClick={onClick} aria-label={label} disabled={disabled}>
      {children}
    </Button>
  )
}
