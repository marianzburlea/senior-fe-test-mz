import GS from '../font-icon'
import * as S from './movie-assistant.style'
import CssReset from '../css-reset'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from '../../config/theme'
import Logo from '../logo'
import Search from '../search'
import TwoSide from '../two-side'
import store from '../../store'
import MovieList from '../movie-list'

const MovieAssistant = () => {
  return (
    <Provider store={store}>
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
            <MovieList />
          </S.Wrapper>
        </CssReset>
      </ThemeProvider>
    </Provider>
  )
}

export default MovieAssistant
