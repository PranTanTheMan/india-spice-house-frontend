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
import React, { useEffect } from "react";

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();

  const navItems = [
    {
      name: "menu",
      href: "https://order.toasttab.com/online/india-spice-house-8445-joiner-way",
      target: "_blank",
    },
    { name: "catering", href: "#", target: "_self" },
    { name: "specials", href: "/", target: "_self" },
    { name: "about", href: "/about", target: "_self" },
    { name: "contact", href: "/contact", target: "_self" },
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
              cursor={"pointer"}
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
                {navItems.map((item, index) => (
                  <Button
                    _hover={{ color: "#238d1a", transform: "scale(1.1)" }}
                    color={"white"}
                    key={index}
                    as={"a"}
                    href={item.href}
                    textTransform={"capitalize"}
                    target={item.target}
                  >
                    {item.name}
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                px={7}
                pt={"7px"}
                variant={"unstyled"}
                outline={"1.5px solid green"}
                color={"white"}
                _hover={{ bg: "#238d1a", color: "white" }}
                transition={"all 0.3s ease"}
                as={"a"}
                href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
                target="_blank"
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
