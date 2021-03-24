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
    background: #07574C;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
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
