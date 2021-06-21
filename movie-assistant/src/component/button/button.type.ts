import { ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode | null
  onClick?: () => void
  disabled?: boolean
  hideOnMobile: boolean
  ariaLabel: string
}
