import React from "react";
import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";

export default function PopularItemsCard() {
  const products = [
    {
      id: 1,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image: "/Gallery/1.jpg",
    },
    {
      id: 2,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image: "/Gallery/5.jpg",
    },
    {
      id: 3,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image: "/Gallery/3.jpg",
    },
  ];

  return (
    <>
      <Flex
        flexWrap={"wrap"}
        gap={10}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mb={"5rem"}
      >
        {products.map((product) => (
          <Box key={product} maxW="xs" bg="white" shadow="2xl" rounded="lg">
            <Box px={4} py={2}>
              <chakra.h1
                color="gray.800"
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
              >
                Popular_item
              </chakra.h1>
              <chakra.p mt={1} fontSize="sm" color="gray.600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos quidem sequi illum facere recusandae voluptatibus
              </chakra.p>
            </Box>

            <Image
              h={48}
              w="full"
              fit="cover"
              mt={2}
              src={product.image}
              alt="popular-item"
            />

            <Flex
              alignItems="center"
              // justifyContent="space-between"
              px={4}
              py={2}
              bg="gray.900"
              roundedBottom="lg"
              color={"white"}
              justifyContent="center"
              fontSize={"xl"}
              fontWeight={"bold"}
              cursor={"pointer"}
              _hover={{ bg: "#238d1a" }}
              transition={"all .3s ease"}
              as={"a"}
              href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
              target="_blank"
            >
              Order Now
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
