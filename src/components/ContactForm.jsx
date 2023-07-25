import React from "react";

import { useState } from "react";

import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson, BsWhatsapp } from "react-icons/bs";
import NextLink from "next/link";
//D92D26
//238d1a

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const onClear = () => {
    setValues("");
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <Center className="contact-large-container" maxW="full" overflow="hidden">
      <Box
        bg="#238d1a"
        color="white"
        borderRadius="lg"
        p={{ sm: 5, md: 5, lg: 16 }}
        className="contact-container"
      >
        <Box p={4} className="contact-content-container">
          <Wrap
            className="contact-content"
            spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
          >
            <WrapItem>
              <Box>
                <Heading>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <NextLink href="tel:9529428010" passHref>
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#FFFFFF"
                        _hover={{ border: "2px solid #D92D26" }}
                        leftIcon={<MdPhone color="#D92D26" size="20px" />}
                      >
                        (952) 942-8010
                      </Button>
                    </NextLink>
                    <NextLink
                      href="mailto:indiaspicehouseep@gmail.com"
                      passHref
                    >
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#FFFFFF"
                        _hover={{ border: "2px solid #D92D26" }}
                        leftIcon={<MdEmail color="#D92D26" size="20px" />}
                      >
                        indiaspicehouseep@gmail.com
                      </Button>
                    </NextLink>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={10}
                  px={5}
                  alignItems="center"
                >
                  <IconButton
                    as="a"
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#D92D26" }}
                    icon={<MdFacebook size="28px" />}
                    href="https://www.facebook.com/indiaspicehouseep"
                  />
                  <IconButton
                    as="a"
                    aria-label="whatsapp"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#D92D26" }}
                    icon={<BsWhatsapp size="28px" />}
                    href="https://wa.me/16122937478"
                  />
                </HStack>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="white" borderRadius="lg" className={"form-box"}>
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input
                          type="text"
                          size="md"
                          name="name"
                          className="input_container"
                          value={name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input
                          type="email"
                          size="md"
                          name="email"
                          className="input_container"
                          value={email}
                          onChange={handleChange}
                          placeholder="example@gmail.com"
                          required
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Type Here!"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        className="btn_container"
                        variant="solid"
                        bg="#D92D26"
                        color="white"
                        _hover={{}}
                        type="submit"
                        as="a"
                        onClick={onClear}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Center>
  );
}
