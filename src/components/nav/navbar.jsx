import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";
import Link from "next/link";

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();

  const navItems = [
    { name: "menu", href: "#menu" },
    { name: "specials", href: "#specials" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Box bg="#D92D26" position="fixed" zIndex="tooltip" w={"100%"}>
      <Box py={5} px={20}>
        <HStack justify="space-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              boxSize="60px"
              transition={"all 0.35s ease "}
              _hover={{ transform: "rotate(25deg) scale(1.05)" }}
            />
          </Link>
          {isDesktop ? (
            <HStack spacing="8">
              <ButtonGroup
                size="lg"
                variant="text"
                colorScheme="gray"
                spacing="0"
              >
                {navItems.map((item) => (
                  <Button
                    _hover={{ color: "#238d1a", transform: "scale(1.1)" }}
                    color={"white"}
                    key={item}
                    as={"a"}
                    href={item.href}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                px={7}
                variant={"unstyled"}
                outline={"1.5px solid green"}
                color={"white"}
                _hover={{ bg: "#238d1a", color: "white" }}
                transition={"all 0.3s ease"}
              >
                Order Now
              </Button>
            </HStack>
          ) : (
            <>
              <ToggleButton
                onClick={mobileNavbar.onToggle}
                isOpen={mobileNavbar.isOpen}
                aria-label="Open Menu"
              />
              <MobileDrawer
                isOpen={mobileNavbar.isOpen}
                onClose={mobileNavbar.onClose}
              />
            </>
          )}
        </HStack>
      </Box>
    </Box>
  );
}
