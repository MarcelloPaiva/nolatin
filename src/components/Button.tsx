import { ReactNode, forwardRef } from "react"
import styled from "styled-components"

interface ButtonProps {
  onClick?: () => void
  label?: string
  styles?: string
  size?: number
  children?: ReactNode
  link?: string
  disabled?: boolean
  newTab?: boolean
}

const Button = forwardRef(
  (
    { onClick, label, styles, children, link, disabled, newTab }: ButtonProps,
    ref
  ) => {
    const buttonStyles = ` 
    display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      border: none;
      border-radius: 12px;
      background-color: var(--button-primary);
      color: #fff;
      padding: 16px;
      margin-top: 1rem;
      font-size: 120%;
      letter-spacing: .05rem;
      ${styles}
    `
    const buttonLinkStyles = `
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: auto;
    max-width: 678px;
    margin-top: 1rem;
    border-radius: 12px;
    padding: 16px;
    color: var(--buttonSecondary-label);
    font-size: 120%;
    letter-spacing: .05rem;
    font-weight: bold;
      `
    const buttonDisabledStyles = `
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      background-color: var(--secondary-20);
      color: var(--secondary-50);
      padding: 16px;
      margin-top: 2rem;
      font-size: 120%;
      letter-spacing: .05rem;
      `
    const Button = styled.button`
      ${buttonStyles}
      ${disabled && buttonDisabledStyles}
    `
    const Link = styled.a`
      text-decoration: none;
      ${buttonLinkStyles}
    `

    return link ? (
      <Link
        href={link}
        aria-label={label}
        role="button"
        target={newTab ? "_blank" : undefined}
        ref={ref as React.RefObject<HTMLAnchorElement>}
      >
        {children}
      </Link>
    ) : (
      <Button
        onClick={onClick}
        aria-label={label}
        disabled={disabled}
        ref={ref as React.RefObject<HTMLButtonElement>}
      >
        {children}
      </Button>
    )
  }
)

export default Button
