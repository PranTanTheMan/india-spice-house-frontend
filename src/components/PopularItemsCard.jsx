import React from "react";
import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";

export default function PopularItemsCard() {
  const products = [
    {
      id: 1,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      price: 129,
    },
    {
      id: 2,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      price: 40,
    },
    {
      id: 3,
      name: "NIKE AIR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      price: 15,
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
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
              alt="NIKE AIR"
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
              href="#"
            >
              Order Now
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
