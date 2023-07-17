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
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
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
            <chakra.p mt={4} color="gray.600">
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
