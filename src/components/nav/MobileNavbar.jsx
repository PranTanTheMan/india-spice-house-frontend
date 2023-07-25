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
  { name: "Catering", href: "/catering", target: "_self" },
  { name: "Specials", href: "/#specials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

import { useRouter } from "next/router"; // Import useRouter from Next.js

export const MobileDrawer = (props) => {
  const router = useRouter();

  // Function to handle drawer closing
  const handleCloseDrawer = () => {
    props.onClose();
  };

  // Custom click event handler for the links
  const handleLinkClick = (href) => (event) => {
    event.preventDefault(); // Prevent the default link behavior
    handleCloseDrawer(); // Close the drawer
    if (href.startsWith("#")) {
      // Check if the link is an anchor link (e.g., #specials)
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll to the anchor
      }
    } else {
      router.push(href); // Navigate to the specified page
    }
  };
  return (
    <Drawer placement="top" onClose={handleCloseDrawer} {...props}>
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
                scrollBehavior={"smooth"}
                onClick={handleLinkClick(item.href)}
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
};
