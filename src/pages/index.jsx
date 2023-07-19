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
      {/* Components */}
      <Hero />

      <Delivery />
      <Center
        scrollMarginTop={"140px"}
        id="specials"
        mb={"2rem"}
        mt={"7rem"}
        flexDirection={"column"}
      >
        <Heading>Specials</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
      </Center>
      <Special />
      <PopularItems />

      <BusinessHoursLocation />
    </>
  );
}
