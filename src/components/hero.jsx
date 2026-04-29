import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import Slideshow from "./slideshow";

import { motion } from "framer-motion";
import { orderLink } from "@/lib/siteData";
import NextLink from "next/link";

export default function Hero() {
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  return (
    <>
      <Box bg="gray.800" position="relative">
        <Center
          textAlign={"center !important"}
          py="32"
          position="relative"
          zIndex={1}
        >
          <Flex color="white">
            <Box className="hero-content" mt={{ base: "100px", lg: "150px" }}>
              <MotionHeading
                as="h1"
                size={{ base: "xl", md: "3xl" }}
                className="hero-title"
                fontWeight="extrabold"
                maxWidth={{ base: "100%", md: "80%" }}
                mx="auto"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Indian Restaurant & Grocery Store in Eden Prairie
              </MotionHeading>
              <MotionText
                className="hero-subtitle"
                maxW={"500px"}
                fontSize={{ md: "2xl" }}
                mt="4"
                mx="auto"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                India Spice House serves biryani, dosa, curries, tandoori
                dishes, Indian groceries, and catering for events across the
                southwest metro.
              </MotionText>
              <Stack
                direction={{ base: "column", md: "row" }}
                mt="10"
                spacing="4"
                justifyContent={"center"}
              >
                <MotionButton
                  as="a"
                  href={orderLink}
                  target="_blank"
                  colorScheme="red"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  className="hero-btn"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  <span style={{ paddingRight: "10px" }}>
                    Eat with us today
                  </span>
                  <HiChevronRight />
                </MotionButton>
                <MotionButton
                  as={NextLink}
                  href="/menu"
                  colorScheme="whiteAlpha"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  className="hero-btn"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 1 }}
                >
                  Browse Menu
                </MotionButton>
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
