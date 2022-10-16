import '../styles/globals.css'
import Header from './src/components/header/Header'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import theme from './src/themes/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Header></Header>
    <Component {...pageProps}/>
  </ThemeProvider>
  )
}

export default MyApp
