import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Head from "next/head";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Digital Bank</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
