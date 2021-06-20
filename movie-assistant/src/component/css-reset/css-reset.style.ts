import styled, { createGlobalStyle } from 'styled-components'

export const StyledCssReset = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const GlobalCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Change default 16px font size to work easier with rem's */
  html { font-size: 10px }

  body,
  html {
    margin: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.dark.background};
  }

  body,
  #root  {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
`
