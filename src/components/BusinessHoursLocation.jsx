import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
  chakra,
} from "@chakra-ui/react";

export default function BusinessHoursLocation() {
  return (
    <>
      <Center
        mb={"10rem"}
        mt={{ base: "0", lg: "6rem" }}
        flexDirection={"column"}
      >
        <Center
          mb={"5rem"}
          mt={{ base: "0", lg: "6rem" }}
          flexDirection={"column"}
        >
          <Heading textAlign={"center"}>Business Hours & Location</Heading>
          <Box w="70px" h="2px" bg="black" mt={"10px"} />
        </Center>
        <Flex flexWrap={"wrap"} justifyContent={"center"} w={"100%"}>
          <Stack
            flexDir={"column"}
            alignItems={"center"}
            mr={{ base: "0", lg: "75px" }}
          >
            <Heading pb={"0px"}>Business Hours</Heading>
            <Box w="70px" h="2px" bg="black" mt={"3px"} mb={"20px"} />

            <Accordion allowMultiple>
              <AccordionItem
                w={{ base: "300px", sm: "330px" }}
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
                w={{ base: "300px", sm: "330px" }}
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
          <Stack
            alignItems={"center"}
            ml={{ base: "0", lg: "75px" }}
            mt={{ base: "40px", lg: 0 }}
          >
            <Heading pb={"0px"}>Location</Heading>
            <Box w="70px" h="2px" bg="black" mt={"3px"} mb={"20px"} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.587512577134!2d-93.43395318756629!3d44.85033307094981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f61890d241f0d7%3A0x570098934ad61f71!2sIndia%20Spice%20House%20-%20Indian%20Restaurant%20and%20Grocery%20in%20Eden%20Prairie%2C%20MN!5e0!3m2!1sen!2sus!4v1689617884306!5m2!1sen!2sus"
              width="300"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Flex>
      </Center>
    </>
  );
}
