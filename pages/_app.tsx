import '../styles/globals.css'

import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #1F3326;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
