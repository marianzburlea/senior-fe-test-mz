import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
  borderRadius: {
    s: '2px',
    m: '5px',
    normal: '8px',
  },
  color: {
    dark: {
      background: 'hsl(0, 0%, 11%)',
      backgroundGray: 'hsl(0, 0%, 17%)',
      text: 'hsl(0, 0%, 100%)',
    },
    light: {
      background: 'hsl(0, 0%, 89%)',
      backgroundGray: 'hsl(0, 0%, 83%)',
      text: 'hsl(0, 0%, 0%)',
    },
  },
}

export default defaultTheme
