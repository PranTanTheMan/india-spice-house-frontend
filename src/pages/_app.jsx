import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <GoogleAnalytics />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
