import React from "react";
import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";

export default function PopularItemsCard() {
  const products = [
    {
      id: 1,
      name: "Garlic Naan",
      description:
        "A savory flatbread dough mixed with garlic, expertly baked in a traditional tandoor.",
      image: "/Gallery/5.jpg",
    },
    {
      id: 2,
      name: "Butter Chicken",
      description:
        "Deliciously tender chicken, delicately cooked in a rich and velvety buttery cream sauce.",
      image: "/Gallery/56.jpg",
    },
    {
      id: 3,
      name: "Hyderbad Dum Biryani",
      description:
        "Herb-spiced meat/vegetables with saffron basmati dum rice, Hyderabadi style.",
      image: "/Gallery/53.jpg",
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
                fontSize="22px"
                textTransform="uppercase"
              >
                {product.name}
              </chakra.h1>
              <chakra.p mt={1} fontSize="sm" color="gray.600">
                {product.description}
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
