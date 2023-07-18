import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import Slideshow from "./slideshow";

export default function Hero() {
  return (
    <>
      <Box bg="gray.800" minH={"100vh"} position="relative">
        <Center
          textAlign={"center !important"}
          py="32"
          position="relative"
          zIndex={1}
        >
          <Flex color="white">
            <Box
              w={{ base: "sm", md: "3xl", lg: "4xl" }}
              mt={{ base: "100px", lg: "250px" }}
            >
              <Heading as="h1" size="3xl" fontWeight="extrabold">
                India Spice House, home of the spices
              </Heading>
              <Text fontSize={{ md: "2xl" }} mt="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                mt="10"
                spacing="4"
                justifyContent={"center"}
              >
                <Button
                  as="a"
                  href="#"
                  colorScheme="red"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  <span style={{ paddingRight: "10px" }}>
                    Eat with us today
                  </span>
                  <HiChevronRight />
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Center>
        <Flex
          id="image-wrapper"
          position="absolute"
          insetX="0"
          insetY="0"
          w="full"
          h="full"
          overflow="hidden"
          align="center"
        >
          <Slideshow />
        </Flex>
      </Box>
    </>
  );
}
