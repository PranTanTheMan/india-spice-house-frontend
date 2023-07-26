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

export default function Catering() {
  const pdffile = "/catering.pdf";
  return (
    <>
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
          marginheight="0"
          marginwidth="0"
          style={{ paddingTop: "30px", marginBottom: "100px" }}
        >
          Loading…
        </iframe>
      </Center>
    </>
  );
}
