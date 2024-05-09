import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />



          <Script id="aichatbot-script" strategy="afterInteractive">
            {`!function(w, d, s, ...args) {
    var div = d.createElement('div');
    div.id = 'aichatbot';
    d.body.appendChild(div);
    w.chatbotConfig = args;
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.defer = true;
    j.type = 'module';
    j.src = 'https://aichatbot.sendbird.com/index.js';
    f.parentNode.insertBefore(j, f);
  }(window, document, 'script', 'AF659653-E8C8-4897-999F-05C70E7B55D8', 'onboarding_bot');`}
          </Script>
        </Layout>
      </ChakraProvider>
    </>
  );
}
