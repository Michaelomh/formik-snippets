import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import React from "react";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;