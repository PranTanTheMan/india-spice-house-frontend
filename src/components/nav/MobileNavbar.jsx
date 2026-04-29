import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { orderLink } from "@/lib/siteData";

export const navItems = [
  { name: "Menu", href: "/menu" },
  { name: "Catering", href: "/catering", target: "_self" },
  { name: "Specials", href: "/#specials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const MobileDrawer = (props) => {
  const handleCloseDrawer = () => {
    props.onClose();
  };

  return (
    <Drawer placement="top" onClose={handleCloseDrawer} {...props}>
      <DrawerContent>
        <DrawerBody mt="6.5rem">
          <Stack spacing="6" align="stretch">
            {navItems.map((item) => (
              <Button
                as={NextLink}
                href={item.href}
                key={item.name}
                size="lg"
                variant="text"
                colorScheme="gray"
                scrollBehavior={"smooth"}
                onClick={handleCloseDrawer}
              >
                {item.name}
              </Button>
            ))}
            <NextLink
              target="_blank"
              href={orderLink}
            >
              <Center
                variant={"unstyled"}
                outline={"1.5px solid green"}
                color={"black"}
                _hover={{ bg: "#238d1a", color: "white" }}
                transition={"all 0.3s ease"}
                textAlign={"center"}
                borderRadius={"lg"}
                py={"10px"}
                fontWeight={"semibold"}
              >
                Order Now
              </Center>
            </NextLink>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
