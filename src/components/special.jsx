import React from "react";
import { Box, Flex, Image, chakra, Link } from "@chakra-ui/react";

export default function Special() {
  return (
    <>
      <Flex
        mb={"5rem"}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "xl",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "55rem",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage: "url('/Gallery/4.jpg')",
              }}
              position={"relative"}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "55rem",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              fontWeight="bold"
            >
              Special Item
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              w={{ base: "300px", md: "500px" }}
              h={{ base: "160px", md: "100px" }}
            >
              Special Item Description Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Esse a neque aliquam eligendi labore autem,
              architecto distinctio ea minus. Aliquam aliquid ea, facilis minima
              voluptatibus ullam porro architecto doloribus cum?
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="#238d1a"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  border: "1.5px solid #238d1a",
                  color: "black",
                  bg: "transparent",
                }}
                transition={"all 0.3s ease"}
                href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
                target="_blank"
              >
                Order Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
