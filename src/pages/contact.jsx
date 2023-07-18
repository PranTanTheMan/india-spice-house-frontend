import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  Heading,
  chakra,
  Divider,
  Center,
  Link,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import {
  FaPhone,
  FaClock,
  FaEnvelope,
  FaFacebookSquare,
  FaYelp,
  FaWhatsapp,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <Flex p={4} alignItems={"center"}>
      <chakra.form w={{ base: "325px", lg: "325px" }}>
        <Flex direction="column" spacing={4} w={"100%"}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              border={"1px solid black"}
              type="text"
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              border={"1px solid black"}
              type="email"
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input
              border={"1px solid black"}
              type="text"
              placeholder="Enter the subject"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              border={"1px solid black"}
              placeholder="Enter your message"
              rows={4}
            />
          </FormControl>

          <Button
            as="a"
            href="#"
            colorScheme="red"
            px="8"
            rounded="full"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            w={"230px"}
            mt={"15px"}
          >
            <span style={{ paddingRight: "10px" }}>Send Message</span>
            <HiChevronRight />
          </Button>
        </Flex>
      </chakra.form>
      <Box
        ml={{ base: "0", lg: "50px !important" }}
        w={{ base: "0", lg: "1px" }}
        h={"250px"}
        bg="black"
        // mx="auto"
      />
    </Flex>
  );
};

const ContactInfo = () => {
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        direction="column"
        justify="center"
        align="center"
        mt={10}
        ml={"50px"}
        mb={"50px"}
      >
        <Stack spacing={10}>
          <Flex
            align="center"
            bgGradient="linear-gradient(45deg, #ffcc00, #ff5733)"
            rounded="md"
            p={4}
            w="300px"
          >
            <Box as={FaEnvelope} boxSize={6} color="white" mr={2} />
            <chakra.span color="white" fontWeight="bold">
              Email: info@example.com
            </chakra.span>
          </Flex>

          <Flex
            align="center"
            bgGradient="linear-gradient(45deg, #ffcc00, #ff5733)"
            rounded="md"
            p={4}
            w="300px"
          >
            <Box as={FaPhone} boxSize={6} color="white" mr={2} />
            <chakra.span color="white" fontWeight="bold">
              Phone: +1 123-456-7890
            </chakra.span>
          </Flex>

          <Flex
            align="center"
            bgGradient="linear-gradient(45deg, #ffcc00, #ff5733)"
            rounded="md"
            p={4}
            w="300px"
          >
            <Box as={FaClock} boxSize={6} color="white" mr={2} />
            <chakra.span color="white" fontWeight="bold">
              Working Hours: Mon-Fri 9am-6pm
            </chakra.span>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>India Spice House | Contact</title>
        <meta
          name="description"
          content="India Spice house is a indian grocery and restaurant located in Eden Prairie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Center transform={"translateY(220px)"} mb={"50px"}>
        <Stack spacing={6} direction="row" align="center">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaFacebookSquare size={"65px"} />}
            color={"#ffa500"}
            transition={"all 0.2s ease"}
            _hover={{ color: "#d77c1c" }}
            bg={"none"}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaYelp size={"65px"} />}
            color={"#ffa500"}
            _hover={{ color: "#d77c1c" }}
            bg={"none"}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaWhatsapp size={"65px"} />}
            color={"#ffa500"}
            _hover={{ color: "#d77c1c" }}
            bg={"none"}
          />
        </Stack>
      </Center>
      <Flex
        direction={"row"}
        justifyContent="center"
        align="center"
        minHeight="100vh"
      >
        <ContactForm />
        <ContactInfo />
      </Flex>
    </>
  );
}
