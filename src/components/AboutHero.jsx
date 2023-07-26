import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  chakra,
  Center,
  Flex,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import { motion } from "framer-motion";

import Slideshow from "./slideshow";
import React from "react";

export default function AboutHero() {
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  return (
    <Box bg="gray.800" minH={"100vh"} position="relative">
      <Center
        textAlign={"center !important"}
        pb="32"
        pt={{ base: "100px", lg: "170px" }}
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Learn what makes India Spice House.{" "}
              <chakra.span
                bgGradient="linear-gradient(70deg, #D92D26, #ffa500)"
                bgClip="text"
                fontWeight="bold"
              >
                The Best.
              </chakra.span>
            </MotionHeading>
            <MotionText
              className="hero-subtitle"
              maxW={"500px"}
              fontSize={{ md: "2xl" }}
              mt="4"
              mx="auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              From Catering events, a variety of specials and a wide range of
              grocery items, we have it all.
            </MotionText>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
              justifyContent={"center"}
            >
              <MotionButton
                as="a"
                href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
                target="_blank"
                colorScheme="red"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
                className="hero-btn"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <span style={{ paddingRight: "10px" }}>Eat with us today</span>
                <HiChevronRight />
              </MotionButton>
              <MotionButton
                color={"white"}
                variant="ghost"
                _hover={{ bg: "whiteAlpha.300" }}
                size={{
                  base: "lg",
                  md: "xl",
                }}
                px={"10px"}
                as={"a"}
                cursor={"pointer"}
                href={"#learn"}
                className="hero-btn"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Learn more
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
  );
}
