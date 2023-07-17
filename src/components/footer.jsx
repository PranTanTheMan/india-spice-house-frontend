import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaYelp, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="#D92D26">
      {/* <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}> */}
      <Box py={{ base: "11", md: "3rem" }} px={{ base: "10", md: "24" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Link href="/" aria-label="Back to homepage">
              <Image
                src="/logo.png"
                alt="logo"
                boxSize="60px"
                transition={"all 0.35s ease "}
                _hover={{ transform: "rotate(25deg)" }}
              />
            </Link>
            <ButtonGroup variant={"tertiary.accent"}>
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaFacebookSquare size={"25px"} />}
                color={"#ffa500"}
                transition={"all 0.2s ease"}
                _hover={{ color: "#d77c1c" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaYelp size={"25px"} />}
                color={"#ffa500"}
                _hover={{ color: "#d77c1c" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaWhatsapp size={"25px"} />}
                color={"#ffa500"}
                _hover={{ color: "#d77c1c" }}
              />
            </ButtonGroup>
          </Stack>
          <Stack
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" color="white">
              &copy; {new Date().getFullYear()} India Spice House. All rights
              reserved. Designed by PRSM.
            </Text>
            <Stack direction={"column"} spacing={6}>
              <Link href="tel:9529427510" fontSize="sm" color="white">
                Grocery: (952) 942-7510
              </Link>
              <Link href="tel:9529428010" fontSize="sm" color="white">
                Restaurant: (952) 942-8010
              </Link>
            </Stack>
          </Stack>
        </Stack>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
