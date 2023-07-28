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
          content="India Spice House is a gourmet Indian restaurant and grocery store in Eden Prairie, Minnesota. We offer the best Indian cuisine, authentic Indian spices, and catering services for private events."
        />
        <meta
          name="keywords"
          content="Indian restaurant in Eden Prairie, Indian grocery store in Eden Prairie, Best Indian cuisine in Eden Prairie, Indian catering services in Eden Prairie, Private event hosting in Eden Prairie, India Spice House Eden Prairie, Gourmet Indian food in Eden Prairie, Indian food delivery in Eden Prairie, Authentic Indian spices in Eden Prairie, Eden Prairie Indian food specials, India Spice House Grocery, Indian Grocery near me, Grocery store"
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
