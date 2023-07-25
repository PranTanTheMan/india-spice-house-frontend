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
      <Flex
        py={{ base: "40px", md: "100px" }}
        mx={"auto"}
        maxW={"50rem"}
        alignItems={"center"}
      >
        <Heading
          size={{
            base: "md",
            md: "xl",
          }}
          w={"100%"}
        >
          Create your app remarkable fast
        </Heading>
        <Stack
          spacing={{
            base: "6",
            md: "8",
          }}
          justifyContent="center"
        >
          <Text
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="fg.muted"
          >
            Choose from over 180+ beautiful and responsive components and build
            your app twice as fast.
          </Text>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing="3"
          >
            <Button
              size={{
                base: "lg",
                md: "xl",
              }}
            >
              Buy now
            </Button>
            <Button
              variant="secondary"
              size={{
                base: "lg",
                md: "xl",
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Center h={"100vh"} pt={"20px"}>
        <iframe
          style={{
            border: "0px transparent",
            overflow: "hidden",
            width: "90%",
            height: "80%",
          }}
          src={pdffile + "#zoom=100%"}
        ></iframe>
      </Center>
    </>
  );
}
