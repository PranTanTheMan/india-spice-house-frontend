import Head from "next/head";
import Hero from "@/components/hero";
import Special from "@/components/special";
import PopularItems from "@/components/PopularItems";
import Delivery from "@/components/delivery";
import BusinessHoursLocation from "@/components/BusinessHoursLocation";
import {
  Box,
  Center,
  Heading,
  Link,
  Image,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Head>
        <title>India Spice House | Home</title>
        <meta
          name="description"
          content="India Spice house is a indian grocery and restaurant located in Eden Prairie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=770204758187734&autoLogAppEvents=1"
        nonce="6VyfEouX"
      ></script>
      {/* Components */}
      <Hero />
      <Delivery />

      <Special />
      <PopularItems />

      <BusinessHoursLocation />
    </>
  );
}
