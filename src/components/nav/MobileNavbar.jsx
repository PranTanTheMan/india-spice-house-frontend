import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";

export const MobileDrawer = (props) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="6.5rem">
        <Stack spacing="6" align="stretch">
          {["menu", "specials", "about", "contact"].map((item) => (
            <Button key={item} size="lg" variant="text" colorScheme="gray">
              {item}
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
