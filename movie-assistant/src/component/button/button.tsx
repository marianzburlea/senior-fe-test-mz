import * as buttonType from './button.type'
import * as S from './button.style'

const Button = ({ children }: buttonType.ButtonProps) => {
  return (
    <S.Button>{children}</S.Button>
  )
}

export default Button
