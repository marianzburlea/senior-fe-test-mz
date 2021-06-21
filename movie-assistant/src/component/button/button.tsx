import * as buttonType from './button.type'
import * as S from './button.style'

const Button = ({
  children,
  onClick,
  disabled,
  hideOnMobile,
  ariaLabel,
}: buttonType.ButtonProps) => {
  return (
    <S.Button
      hideOnMobile={hideOnMobile}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
