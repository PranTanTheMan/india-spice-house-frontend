import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />

          <script
            src="//code.tidio.co/zbbipf0hzh3epsuhiuiklvcz2ylwowis.js"
            async
          ></script>
        </Layout>
      </ChakraProvider>
      {/* ✅ */}
    </>
  );
}
