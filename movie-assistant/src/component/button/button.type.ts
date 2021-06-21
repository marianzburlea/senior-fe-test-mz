import { ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode | null
  onClick?: () => void
  disabled?: boolean
  ariaLabel: string
}
