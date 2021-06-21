import * as buttonType from './button.type'
import * as S from './button.style'

const Button = ({
  children,
  onClick,
  disabled,
  ariaLabel,
}: buttonType.ButtonProps) => {
  return (
    <S.Button aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
