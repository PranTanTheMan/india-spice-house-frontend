import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import React from "react";

export default function AboutHero() {
  return (
    <Box
      position="relative"
      height={{
        lg: "90vh",
      }}
      pt={{ base: "80px", lg: "0" }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        spacing={{
          base: "16",
        }}
        align={{
          lg: "center",
        }}
        height="full"
      >
        <Stack
          spacing={{
            base: "8",
            md: "12",
          }}
          ml={{ base: 0, lg: "150px" }}
        >
          <Stack spacing="4">
            <Stack
              spacing={{
                base: "4",
                md: "6",
              }}
              maxW={{
                md: "xl",
                lg: "md",
                xl: "xl",
              }}
              mt={"50px"}
            >
              <Heading
                size={{
                  base: "2xl",
                  md: "4xl",
                }}
              >
                Learn what makes the best.{" "}
                <chakra.span
                  bgGradient="linear-gradient(70deg, #D92D26, #ffa500)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  The Best.
                </chakra.span>
              </Heading>
              <Text
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                color="fg.muted"
              >
                From Catering events, a variety of specials and a wide range of
                grocery items, we have it all.
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing="3"
            maxW={{ base: "250px", md: "xl" }}
            mx={{ base: "auto", md: "0" }}
          >
            <Button
              as="a"
              href="#"
              colorScheme="red"
              px="8"
              rounded="full"
              size="lg"
              fontSize="md"
              fontWeight="bold"
            >
              <span style={{ paddingRight: "10px" }}>Eat with us today</span>
              <HiChevronRight />
            </Button>
            <Button
              variant="ghost"
              size={{
                base: "lg",
                md: "xl",
              }}
              px={"10px"}
              as={"a"}
              cursor={"pointer"}
              href={"#learn"}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
        <Box
          pos={{
            lg: "absolute",
          }}
          right="0"
          bottom="0"
          w={{
            base: "full",
            lg: "50%",
          }}
          height={{
            base: "96",
            lg: "full",
          }}
          sx={{
            clipPath: {
              lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
          }}
        >
          <Img boxSize="full" objectFit="cover" src="/1.jpg" alt="werk" />
          {/* Add slideshow that includes catering, event stuff, grocery, tandoor specials, etc */}
        </Box>
      </Stack>
    </Box>
  );
}
