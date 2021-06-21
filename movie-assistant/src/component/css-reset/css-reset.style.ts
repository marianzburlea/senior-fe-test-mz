import styled, { createGlobalStyle } from 'styled-components'

export const StyledCssReset = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.color.dark.background};
  }


  @media (prefers-color-scheme: light) {
    html,
    body {
      background-color: ${({ theme }) => theme.color.light.background};
    }
  }


  body,
  #here  {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  #here  {
    padding: 0 2.5rem;
  }
`
