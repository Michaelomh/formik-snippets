import "../styles/globals.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/inter/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Roboto Mono, sans-serif",
  },
});

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
