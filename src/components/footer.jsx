import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
                icon={<FaLinkedin size={"25px"} />}
                color={"#ffa500"}
                transition={"all 0.2s ease"}
                _hover={{ color: "#d77c1c" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub size={"25px"} />}
                color={"#ffa500"}
                _hover={{ color: "#d77c1c" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter size={"25px"} />}
                color={"#ffa500"}
                _hover={{ color: "#d77c1c" }}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} India Spice House. All rights
            reserved.
          </Text>
        </Stack>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
