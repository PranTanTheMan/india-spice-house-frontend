import {
  Box,
  ButtonGroup,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
  chakra,
  HStack,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import NextLink from "next/link";
import { businessInfo } from "@/lib/siteData";

export default function Footer() {
  return (
    <Box bg="#D92D26">
      <Box py={{ base: "11", md: "3rem" }} px={{ base: "10", md: "24" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Link as={NextLink} href="/" aria-label="Back to homepage">
              <Image
                src="/logo.png"
                alt="India Spice House logo"
                boxSize="60px"
                transition={"all 0.35s ease "}
              />
            </Link>
            <ButtonGroup variant={"tertiary.accent"}>
              <IconButton
                as="a"
                href={businessInfo.facebook}
                target="_blank"
                aria-label="India Spice House on Facebook"
                icon={<FaFacebookSquare size={"25px"} />}
                color={"#ffa500"}
                transition={"all 0.2s ease"}
                _hover={{ color: "#d77c1c" }}
              />

              <IconButton
                as="a"
                href={`https://wa.me/${businessInfo.whatsappPhone}`}
                target="_blank"
                aria-label="Message India Spice House on WhatsApp"
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
                Grocery: {businessInfo.groceryPhone}
              </Link>
              <Link href="tel:9529428010" fontSize="sm" color="white">
                Restaurant: {businessInfo.restaurantPhone}
              </Link>
              <Link
                href={`mailto:${businessInfo.email}`}
                fontSize="sm"
                color="white"
              >
                Email: {businessInfo.email}
              </Link>
              <Link
                href={`https://wa.me/${businessInfo.whatsappPhone}`}
                target="_blank"
                fontSize="sm"
                color="white"
              >
                WhatsApp: message us
              </Link>
            </Stack>
          </Stack>
          <HStack
            as="nav"
            aria-label="Footer navigation"
            spacing={{ base: 3, md: 6 }}
            justify="center"
            flexWrap="wrap"
          >
            {[
              { label: "Menu", href: "/menu" },
              { label: "Specials", href: "/#specials" },
              { label: "Gallery", href: "/gallery" },
              { label: "Blog", href: "/blog" },
              { label: "Catering", href: "/catering" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
                <Link
                  key={item.label}
                  as={NextLink}
                  href={item.href}
                  color="white"
                  fontSize="sm"
                >
                  {item.label}
                </Link>
              ))}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
