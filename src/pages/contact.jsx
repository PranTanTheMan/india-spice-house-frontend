import React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone, MdEmail, MdFacebook } from "react-icons/md";
import Seo from "@/components/Seo";
import { businessInfo } from "@/lib/siteData";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Contact API failed");
      }

      setValues({ name: "", email: "", message: "" });
      setIsLoading(false);

      toast({
        title: "Message Sent",
        description: "We will get back to you as soon as possible.",
        status: "success",
        duration: 3500,
        isClosable: true,
      });
    } catch {
      setIsLoading(false);
      toast({
        title: "Message not sent",
        description:
          "Please call or email India Spice House directly and try again later.",
        status: "error",
        duration: 3500,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Seo
        title="Contact India Spice House in Eden Prairie"
        description="Contact India Spice House in Eden Prairie, MN for restaurant orders, grocery questions, catering inquiries, pickup, delivery, and general questions."
        path="/contact"
      />
      <Box p={10} minH={"80vh"} pt={"180px !important"}>
        <Box mt={["100px", 0]}>
          <SimpleGrid
            display={{ base: "initial", md: "grid" }}
            columns={{ md: 1 }}
            spacing={{ md: 6 }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading
                  fontSize="4xl"
                  fontWeight="medium"
                  lineHeight="10"
                  textAlign={"center"}
                >
                  Contact
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  textAlign={"center"}
                >
                  Call, email, message us on WhatsApp, or send a note below.
                </Text>
                <Stack spacing={1} align="center" mt={4} color="gray.700">
                  <Text>
                    Restaurant:{" "}
                    <Box as="a" href="tel:9529428010" color="#D92D26">
                      {businessInfo.restaurantPhone}
                    </Box>
                  </Text>
                  <Text>
                    Grocery:{" "}
                    <Box as="a" href="tel:9529427510" color="#D92D26">
                      {businessInfo.groceryPhone}
                    </Box>
                  </Text>
                  <Text>
                    Email:{" "}
                    <Box
                      as="a"
                      href={`mailto:${businessInfo.email}`}
                      color="#D92D26"
                    >
                      {businessInfo.email}
                    </Box>
                  </Text>
                </Stack>
                <Box textAlign={"center"}>
                  <IconButton
                    className="contact-icon"
                    as="a"
                    aria-label="facebook"
                    variant="ghost"
                    position={"relative"}
                    size="lg"
                    isRound={true}
                    _hover={{ color: "#D92D26" }}
                    icon={<MdFacebook size="28px" />}
                    href={businessInfo.facebook}
                  />

                  <IconButton
                    className="contact-icon"
                    as="a"
                    aria-label="whatsapp"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ color: "#D92D26" }}
                    icon={<BsWhatsapp size="28px" />}
                    href={`https://wa.me/${businessInfo.whatsappPhone}`}
                  />
                  <IconButton
                    className="contact-icon"
                    as="a"
                    aria-label="phone"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ color: "#D92D26" }}
                    icon={<MdPhone size="28px" />}
                    href="tel:9529428010"
                  />
                  <IconButton
                    className="contact-icon"
                    as="a"
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ color: "#D92D26" }}
                    icon={<MdEmail size="28px" />}
                    href={`mailto:${businessInfo.email}`}
                  />
                </Box>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <Stack px={4} py={5} p={[null, 6]} bg="white" spacing={6}>
                <form onSubmit={handleSubmit}>
                  <SimpleGrid
                    columns={6}
                    spacing={6}
                    maxW={"400px"}
                    mx={"auto"}
                  >
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        Name
                      </FormLabel>
                      <div className="input_container">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          placeholder="Enter your name..."
                          className="input"
                          required
                        />
                      </div>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        Email address
                      </FormLabel>
                      <div className="input_container">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          placeholder="Enter your email..."
                          className="input"
                          required
                        />
                      </div>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                      >
                        Message
                      </FormLabel>
                      <div className="input_container">
                        <textarea
                          name="message"
                          value={message}
                          onChange={handleChange}
                          placeholder="Enter your message..."
                          className="input"
                          required
                        />
                      </div>
                    </FormControl>
                    <Box textAlign={"center"} as={GridItem} colSpan={6}>
                      <Button
                        w={"100px"}
                        type="submit"
                        isLoading={isLoading}
                        border={"1px"}
                        bg={"#FFFFFF"}
                        _hover={{ bg: "#D92D26" }}
                        borderColor={"#D92D26"}
                      >
                        {isLoading ? <Spinner /> : "Send"}
                      </Button>
                    </Box>
                  </SimpleGrid>
                </form>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
