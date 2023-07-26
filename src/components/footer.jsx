import {
  Box,
  ButtonGroup,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
  chakra,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="#D92D26">
      <Box py={{ base: "11", md: "3rem" }} px={{ base: "10", md: "24" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Link href="/" aria-label="Back to homepage">
              <Image
                src="/logo.png"
                alt="logo"
                boxSize="60px"
                transition={"all 0.35s ease "}
              />
            </Link>
            <ButtonGroup variant={"tertiary.accent"}>
              <IconButton
                as="a"
                href="https://www.facebook.com/indiaspicehouseep"
                target="_blank"
                aria-label="Face"
                icon={<FaFacebookSquare size={"25px"} />}
                color={"#ffa500"}
                transition={"all 0.2s ease"}
                _hover={{ color: "#d77c1c" }}
              />

              <IconButton
                as="a"
                href="https://wa.me/16122937478"
                target="_blank"
                aria-label="Twitter"
                icon={<FaWhatsapp size={"25px"} />}
                color={"#ffa500"}
                _hover={{ color: "#d77c1c" }}
              />
            </ButtonGroup>
          </Stack>
          <Stack
            flexDir={{ base: "column-reverse", lg: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text
              display={{ base: "block", lg: "none" }}
              textAlign={"center"}
              fontSize="sm"
              color="white"
            >
              Designed by PRSM.
            </Text>
            <Text
              mt={{ base: "15px", md: "0" }}
              textAlign={"center"}
              fontSize="sm"
              color="white"
            >
              &copy; {new Date().getFullYear()} India Spice House. All rights
              reserved.{" "}
              <chakra.span display={{ base: "none", lg: "block" }}>
                Designed by PRSM.
              </chakra.span>
            </Text>
            <Stack direction={"column"} spacing={3}>
              <Link href="tel:9529427510" fontSize="sm" color="white">
                Grocery: (952) 942-7510
              </Link>
              <Link href="tel:9529428010" fontSize="sm" color="white">
                Restaurant: (952) 942-8010
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
