import { ReactNode } from 'react'
import * as S from './css-reset.style'

/* eslint-disable-next-line */
export interface CssResetProps {
  children: ReactNode
}

export const CssReset = ({ children }: CssResetProps) => {
  return (
    <S.StyledCssReset>
      <S.GlobalCss />
      {children}
    </S.StyledCssReset>
  )
}

export default CssReset
