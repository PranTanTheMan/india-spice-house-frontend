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
import { businessInfo, orderLink } from "@/lib/siteData";

export default function Delivery() {
  return (
    <>
      <Center mb={"2rem"} mt={"7rem"} flexDirection={"column"}>
        <Heading>Order Delivery</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
        <Text mt={"10px"}>
          Pick-up available{" "}
          <Link
            color="#238d1a"
            href={orderLink}
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
          mx={{ base: "15px", lg: "150px" }}
        >
          {businessInfo.deliveryLinks.map((item) => (
            <Center
              key={item.name}
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
                src={item.logo}
                h={{
                  base: "8",
                  md: "10",
                }}
                maxW="180px"
                alt={`${item.name} delivery for India Spice House`}
              />
            </Center>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
