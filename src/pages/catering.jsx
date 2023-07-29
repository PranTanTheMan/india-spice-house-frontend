import React from "react";
import {
  Center,
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Carousel from "@/components/carousel";
import Head from "next/head";

export default function Catering() {
  const pdffile = "/catering.pdf";
  return (
    <>
      <Head>
        <title>India Spice House | Catering</title>
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
      <Carousel />
      <Center h={"200vh"} pt={"20px"} flexDirection={"column"}>
        <iframe
          id="pdf"
          style={{
            border: "0px transparent",
            overflow: "hidden",
            width: "90%",
            height: "100%",
            marginTop: "100px",
            marginBottom: "20px",
            scrollMarginTop: "100px",
          }}
          src={pdffile + "#zoom=100%"}
        ></iframe>
        <Heading scrollMarginTop={"150px"} id="application" mt={"150px"}>
          Catering Application
        </Heading>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfjFTakC69x3BOOPyOFEr2QeDlHnTVMDlSPfyt5AdpaQJYr3A/viewform"
          width="100%"
          height="1520"
          style={{ paddingTop: "30px", marginBottom: "100px" }}
        >
          Loading…
        </iframe>
      </Center>
    </>
  );
}
