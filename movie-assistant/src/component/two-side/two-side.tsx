import { ITwoSide } from './two-side.type'
import * as S from './two-side.style'

const TwoSide = ({ children }: ITwoSide): JSX.Element => {
  return <S.TwoSide>{children}</S.TwoSide>
}

export default TwoSide
