import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import '../src/styles/globals.css'
import Layout from '../src/components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
