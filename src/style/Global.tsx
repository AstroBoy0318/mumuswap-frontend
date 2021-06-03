import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
    letter-spacing: 0.1em !important;
  }
  @font-face {
    font-family: "Bunny";
    src: url(/fonts/bunny/bunny.ttf);
  } 
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Bunny;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
