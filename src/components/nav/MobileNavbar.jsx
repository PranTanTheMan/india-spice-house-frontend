import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

export const navItems = [
  {
    name: "Menu",
    href: "https://order.toasttab.com/online/india-spice-house-8445-joiner-way",
  },
  { name: "Catering", href: "#", target: "_self" },
  { name: "Specials", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const MobileDrawer = (props) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="6.5rem">
        <Stack spacing="6" align="stretch">
          {navItems.map((item) => (
            <Button
              as={"a"}
              href={item.href}
              key={item}
              size="lg"
              variant="text"
              colorScheme="gray"
            >
              {item.name}
            </Button>
          ))}
          <Link
            target="_blank"
            href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
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
          </Link>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
