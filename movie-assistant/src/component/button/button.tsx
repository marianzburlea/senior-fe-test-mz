import * as buttonType from './button.type'
import * as S from './button.style'

const Button = ({ children, onClick, disabled }: buttonType.ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
