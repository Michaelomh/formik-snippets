import '../styles/globals.css'
import '@fontsource/roboto-mono'
import '@fontsource/inter'
import '@fontsource/open-sans'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Open Sans, sans-serif',
    code: 'Roboto Mono, sans-serif',
  },
})

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Application
