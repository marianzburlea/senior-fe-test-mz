import Button from '../button'
import GS from '../font-icon'
import * as S from './movie-assistant.style'
import CssReset from '../css-reset'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import Logo from '../logo'
import Search from '../search'
import TwoSide from '../two-side'

const MovieAssistant = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset>
        <GS.IconFont />

        <S.Wrapper>
          <S.Header>
            <TwoSide>
              <Logo />
              <Search />
            </TwoSide>
          </S.Header>

          <S.Background>
            <TwoSide>
              <S.Text>211 Results found</S.Text>
              <S.Text>
                <p>Page 1 of 9</p>
                <Button>
                  <i className="mmtflix-back-arrow"></i>
                </Button>
                <Button>
                  <i className="mmtflix-forward-arrow"></i>
                </Button>
              </S.Text>
            </TwoSide>
          </S.Background>
        </S.Wrapper>
      </CssReset>
    </ThemeProvider>
  )
}

export default MovieAssistant
