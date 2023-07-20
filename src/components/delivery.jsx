import React from "react";
import {
  Stack,
  Link,
  Text,
  Center,
  Image,
  Heading,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Delivery() {
  const data = [
    {
      id: 1,
      img: "/grubhub.png",
      href: "https://www.grubhub.com/restaurant/india-spice-house-8445-joiner-way-eden-prairie/336713?proof=true",
    },
    {
      id: 2,
      img: "/doordash.png",
      href: "https://order.online/store/india-spice-house-eden-prairie-27642/?delivery=true&hideModal=true",
    },
    {
      id: 3,
      img: "/ubereats.png",
      href: "https://www.ubereats.com/store/india-spice-house-restaurant/Cy76oYVZTLWsC0uR9qOAnA?diningMode=DELIVERY&ps=1",
    },
  ];
  return (
    <>
      <Center mb={"2rem"} mt={"12rem"} flexDirection={"column"}>
        <Heading>Order Delivery</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
        <Text mt={"10px"}>
          Pick-up available{" "}
          <Link
            color="#238d1a"
            href="https://order.online/store/india-spice-house-eden-prairie-27642/?hideModal=true&pickup=true"
            target="_blank"
          >
            here
          </Link>
        </Text>
      </Center>

      <Stack spacing="8" pb={"120px"}>
        <Text
          fontSize={{
            base: "md",
            md: "lg",
          }}
          fontWeight="medium"
          color="black"
          textAlign="center"
        >
          Get Delivery with these providers:
        </Text>
        <SimpleGrid
          gap={{
            base: "4",
            md: "6",
          }}
          columns={{
            base: 2,
            md: 3,
          }}
          mb={"75px"}
          mx={{ base: "0", lg: "150px" }}
        >
          {data.map((item) => (
            <Center
              key={item.id}
              bg="#f1f1f1"
              py={{
                base: "4",
                md: "8",
              }}
              boxShadow="sm"
              borderRadius="lg"
              _hover={{ bg: "#e1e1e1" }}
              transition={"all .2s ease-in-out"}
              cursor={"pointer"}
              as="a"
              href={item.href}
              target="_blank"
            >
              <Image
                src={item.img}
                h={{
                  base: "8",
                  md: "10",
                }}
                maxW="180px"
                alt="image"
              />
            </Center>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
