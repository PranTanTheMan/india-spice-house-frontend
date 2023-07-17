import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
} from "@chakra-ui/react";

export default function BusinessHoursLocation() {
  const data = [
    {
      id: 1,
      title: "Grocery",
      content: "10:00am - 10:00pm",
    },
    {
      id: 2,
      title: "Restaurant",
      content: `10:00am - 10:00am 10:00am - 10:00pm `,
    },
  ];
  return (
    <>
      <Center mb={"10rem"} mt={"7rem"} flexDirection={"column"}>
        <Center mb={"5rem"} mt={"7rem"} flexDirection={"column"}>
          <Heading>Business Hours & Location</Heading>
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
            {data.map((item) => (
              <Accordion allowToggle>
                <AccordionItem
                  w={"300px"}
                  key={item.id}
                  bg={"#e1e1e1"}
                  borderRadius={10}
                  py={"3px"}
                >
                  <AccordionButton>
                    <Box key={item.id} as="span" textAlign="left">
                      {item.title}
                    </Box>
                    <Spacer />
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    borderBottomRadius={10}
                    bg={"#f3f3f3"}
                    maxW={"350px"}
                    pb={4}
                    key={item.id}
                  >
                    Times
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
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
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Flex>
      </Center>
    </>
  );
}
