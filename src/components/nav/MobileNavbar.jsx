import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

export const navItems = [
  { name: "Menu", href: "#menu" },
  { name: "Specials", href: "#specials" },
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
          <Button
            variant={"unstyled"}
            outline={"1.5px solid green"}
            color={"black"}
            _hover={{ bg: "#238d1a", color: "white" }}
            transition={"all 0.3s ease"}
          >
            Order Now
          </Button>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
