import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VisuallyHidden,
  chakra,
  Divider,
  VStack,
  Link,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import NextLink from "next/link";
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp } from "react-icons/bs";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

export default function vcontact2() {
  return (
    <Box p={10}>
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading
                fontSize="lg"
                fontWeight="medium"
                lineHeight="6"
                textAlign={"center"}
              >
                Contact
              </Heading>
              <Text mt={1} fontSize="sm" color="gray.600" textAlign={"center"}>
                Fill out the form to contact
              </Text>

              <HStack
                pl={"240px"}
                alignItems="center"
                mt={"1"}
                textAlign={"center"}
              >
                <IconButton
                  className="contact-icon"
                  as="a"
                  aria-label="facebook"
                  variant="ghost"
                  position={"relative"}
                  size="lg"
                  isRound={true}
                  _hover={{ color: "#D92D26" }}
                  icon={<MdFacebook size="28px" />}
                  href="https://www.facebook.com/indiaspicehouseep"
                />

                <IconButton
                  className="contact-icon"
                  as="a"
                  aria-label="whatsapp"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ color: "#D92D26" }}
                  icon={<BsWhatsapp size="28px" />}
                  href="https://wa.me/16122937478"
                />
              </HStack>
            </Box>
            <Box>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <NextLink href="tel:9529428010" passHref>
                  <Button
                    className="contact-mail-phone"
                    as="a"
                    size="md"
                    height="48px"
                    width="163px"
                    variant="ghost"
                    color="#F33FFF"
                    _hover={{}}
                    leftIcon={<MdPhone color="#D92D26" size="20px" />}
                    alignItems={"center"}
                  >
                    (952) 942-8010
                  </Button>
                </NextLink>
                <NextLink href="mailto:indiaspicehouseep@gmail.com" passHref>
                  <Button
                    className="contact-mail-phone"
                    as="a"
                    size="md"
                    height="48px"
                    width="300px"
                    variant="ghost"
                    color="#56FFFF"
                    _hover={{ color: "333" }}
                    leftIcon={<MdEmail color="#D92D26" size="20px" />}
                    alignItems={"center"}
                  >
                    indiaspicehouseep@gmail.com
                  </Button>
                </NextLink>
              </VStack>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack px={4} py={5} p={[null, 6]} bg="white" spacing={6}>
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="last_name"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="street_address"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="city"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="state"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      State / Province
                    </FormLabel>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="postal_code"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autoComplete="postal-code"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg="gray.50"
                _dark={{ bg: "#121212" }}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="brand"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
