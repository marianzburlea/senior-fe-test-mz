// styled.d.ts
import 'styled-components'

interface IDarkOrLight {
  background: string
  backgroundGray: string
  text: string
}

type TColor = {
  dark: IDarkOrLight
  light: IDarkOrLight
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      s: string
      m: string
      normal: string
    }
    color: TColor
    padding: {
      square: string
      big: string
      rectangle: string
    }
  }
}
