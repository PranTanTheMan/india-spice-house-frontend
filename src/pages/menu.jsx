import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Seo, { menuJsonLd } from "@/components/Seo";
import { businessInfo, menuSections, orderLink } from "@/lib/siteData";

export default function Menu() {
  return (
    <>
      <Seo
        title="India Spice House Menu in Eden Prairie, MN"
        description="Browse the India Spice House menu on our website, including Indian appetizers, tandoor, dosa, biryani, vegetarian curries, non-vegetarian curries, desserts, and drinks."
        path="/menu"
        jsonLd={[menuJsonLd()]}
      />
      <Box bg="gray.900" color="white" pt="190px" pb={{ base: 16, md: 20 }}>
        <Container maxW="6xl">
          <Badge bg="#238d1a" color="white" mb={4} px={3} py={1}>
            Eden Prairie Indian Restaurant Menu
          </Badge>
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} maxW="850px">
            Browse the India Spice House menu before you order.
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} mt={5} maxW="760px">
            Explore popular Indian restaurant favorites, South Indian tiffins,
            biryanis, tandoor dishes, vegetarian curries, desserts, and drinks.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={8}>
            <Button
              as="a"
              href={orderLink}
              target="_blank"
              bg="#D92D26"
              color="white"
              _hover={{ bg: "#b92620" }}
              size="lg"
            >
              Order Pickup Online
            </Button>
            <Button
              as={NextLink}
              href="/catering"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.700"
              _hover={{ bg: "whiteAlpha.200" }}
              size="lg"
            >
              View Catering
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <Box
          bg="orange.50"
          borderWidth="1px"
          borderColor="orange.200"
          borderRadius="2xl"
          p={{ base: 5, md: 6 }}
          mb={10}
        >
          <Text color="gray.800">
            Prices, availability, and out-of-stock items can change. Use the
            online ordering link for the current live menu, or call{" "}
            <Box as="a" href="tel:9529428010" color="#D92D26" fontWeight="bold">
              {businessInfo.restaurantPhone}
            </Box>
            .
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
          {menuSections.map((section) => (
            <Box
              key={section.name}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 5, md: 6 }}
              bg="white"
              boxShadow="sm"
            >
              <Heading as="h2" size="md" color="gray.900">
                {section.name}
              </Heading>
              <Text mt={2} color="gray.600">
                {section.description}
              </Text>
              <Stack spacing={4} mt={5}>
                {section.items.map((item) => (
                  <Box key={item.name}>
                    <Heading as="h3" size="sm" color="#D92D26">
                      {item.name}
                    </Heading>
                    <Text mt={1} color="gray.700" fontSize="sm">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
