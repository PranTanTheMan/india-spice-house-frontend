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
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
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

// const ContactForm = () => {
//   return (
//     <Flex p={4} alignItems={"center"}>
//       <chakra.form w={{ base: "305px", sm: "365px" }}>
//         <Flex direction="column" spacing={4} w={"100%"}>
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Input
//               border={"1px solid black"}
//               type="text"
//               placeholder="Enter your name"
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Email</FormLabel>
//             <Input
//               border={"1px solid black"}
//               type="email"
//               placeholder="Enter your email"
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Subject</FormLabel>
//             <Input
//               border={"1px solid black"}
//               type="text"
//               placeholder="Enter the subject"
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Message</FormLabel>
//             <Textarea
//               border={"1px solid black"}
//               placeholder="Enter your message"
//               rows={4}
//             />
//           </FormControl>

//           <Button
//             as="a"
//             href="#"
//             colorScheme="red"
//             px="8"
//             rounded="full"
//             size="lg"
//             fontSize="md"
//             fontWeight="bold"
//             w={"230px"}
//             mt={"15px"}
//           >
//             <span style={{ paddingRight: "10px" }}>Send Message</span>
//             <HiChevronRight />
//           </Button>
//         </Flex>
//       </chakra.form>
//       <Box
//         ml={{ base: "0", lg: "50px !important" }}
//         w={{ base: "0", lg: "1px" }}
//         h={"250px"}
//         bg="black"
//         // mx="auto"
//       />
//     </Flex>
//   );
// };

const ContactInfo = () => {
  return (
    <>
      <Flex
        // display={{ base: "none", lg: "flex" }}
        direction="column"
        justify="center"
        align="center"
        // ml={"50px"}
        mb={"50px"}
      >
        <Stack spacing={10}>
          <Flex
            align="center"
            bg={"#e1e1e1"}
            rounded="md"
            p={4}
            className="contact-info-box"
            id="contact-info-email"
            justifyContent={"center"}
            gap={1}
          >
            <Box as={FaEnvelope} boxSize={6} color="black" mr={2} />
            <Text fontWeight="bold">Email:</Text>
            <Link href="mailto:indiaspicehouseep@gmail.com">
              indiaspicehouseep@gmail.com
            </Link>
          </Flex>

          <Flex
            align="center"
            bg={"#e1e1e1"}
            rounded="md"
            p={4}
            gap={1}
            className="contact-info-box"
          >
            <Box as={FaPhone} boxSize={5} color="black" mr={2} />
            <Text fontWeight="bold">Phone:</Text>
            <Link href="tel:9529428010">(952) 942-8010</Link>
          </Flex>
        </Stack>
        <Stack mt={"30px"} flexDir={"column"} alignItems={"center"}>
          <Accordion allowMultiple>
            <AccordionItem
              className="contact-info-box"
              bg={"#e1e1e1"}
              borderRadius={10}
              py={"3px"}
              margin={"0 auto"}
            >
              <AccordionButton>
                <Box as="span" textAlign="left">
                  Grocery
                </Box>
                <Spacer />
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                borderBottomRadius={10}
                bg={"#f3f3f3"}
                maxW={"350px"}
                pb={4}
              >
                <Text textAlign="left">
                  <chakra.span fontWeight={"bold"}>
                    Monday - Friday:{" "}
                  </chakra.span>
                  11:00 AM - 9:00 PM
                </Text>
                <br />
                <Text textAlign="left">
                  <chakra.span fontWeight={"bold"}>
                    Saturday - Sunday:{" "}
                  </chakra.span>
                  10:00 AM - 9:00 PM
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <Box h={"20px"} />
            <AccordionItem
              bg={"#e1e1e1"}
              borderRadius={10}
              py={"3px"}
              className="contact-info-box"
              margin={"0 auto"}
            >
              <AccordionButton>
                <Box as="span" textAlign="left">
                  Restaurant
                </Box>
                <Spacer />
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                borderBottomRadius={10}
                bg={"#f3f3f3"}
                maxW={"350px"}
                pb={4}
              >
                <Heading
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  pb={"10px"}
                >
                  Lunch
                </Heading>
                <Stack>
                  <Text textAlign="left">
                    <chakra.span fontWeight={"bold"}>
                      Monday - Friday:{" "}
                    </chakra.span>
                    11:30 AM - 2:30 PM
                  </Text>
                  <Text textAlign="left">
                    <chakra.span fontWeight={"bold"}>
                      Satuday - Sunday:{" "}
                    </chakra.span>
                    11:30 AM - 3:30 PM
                  </Text>
                </Stack>
                <Heading
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  pb={"10px"}
                  pt={"20px"}
                >
                  Dinner
                </Heading>
                <Stack>
                  <Text textAlign="left">
                    <chakra.span fontWeight={"bold"}>
                      Monday - Thursday:{" "}
                    </chakra.span>
                    5:00 PM - 9:30 PM
                  </Text>
                  <Text textAlign="left">
                    <chakra.span fontWeight={"bold"}>
                      Friday - Satuday:{" "}
                    </chakra.span>
                    5:00 PM - 10:00 PM
                  </Text>
                  <Text textAlign="left">
                    <chakra.span fontWeight={"bold"}>Sunday: </chakra.span>
                    5:00 PM - 9:00 PM
                  </Text>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
        <Stack
          spacing={6}
          direction="row"
          align="center"
          className="icon-group"
        >
          <IconButton
            as="a"
            href="https://www.facebook.com/indiaspicehouseep"
            aria-label="Facebook"
            icon={<FaFacebookSquare size={"65px"} />}
            color={"#ffa500"}
            transition={"all 0.2s ease"}
            _hover={{ color: "#d77c1c" }}
            bg={"none"}
          />
          <IconButton
            as="a"
            href="https://wa.me/16122937478"
            aria-label="Whatsapp"
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
        alignItems="center"
        minHeight="100vh"
      >
        {/* <ContactForm /> */}

        {/* <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div class="elfsight-app-857618ef-fd65-49e3-b1d9-915a4fcd6275"></div> */}

        <ContactInfo />
      </Flex>
    </>
  );
}
