import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Seo from "@/components/Seo";

const articles = [
  {
    title: "Indian Restaurant and Grocery in One Eden Prairie Stop",
    text: "India Spice House gives guests a place to enjoy Indian food and shop for spices, pantry staples, snacks, frozen items, and grocery essentials in the same visit.",
  },
  {
    title: "What to Order When You Want South Indian Food",
    text: "Dosa, idly, vada, and South Indian combo plates are useful choices for guests looking for lighter meals, crispy crepes, chutneys, and sambar.",
  },
  {
    title: "Planning Indian Catering for a Local Event",
    text: "For family gatherings, office meals, and private events, Indian catering works well when guests can choose from vegetarian curries, biryanis, naan, appetizers, and desserts.",
  },
];

export default function Blog() {
  return (
    <>
      <Seo
        title="Indian Food Blog & Local Guides"
        description="Read India Spice House guides about Indian food, South Indian dishes, Indian groceries, catering, and local dining in Eden Prairie, MN."
        path="/blog"
      />
      <Box bg="orange.50" pt="190px" pb={{ base: 16, md: 20 }}>
        <Container maxW="5xl" textAlign="center">
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }}>
            Indian Food Guides for Eden Prairie
          </Heading>
          <Text mt={5} color="gray.700" fontSize={{ base: "md", md: "xl" }}>
            Useful local content for guests searching for Indian food, catering,
            groceries, and restaurant options near Eden Prairie.
          </Text>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7}>
          {articles.map((article) => (
            <Box
              key={article.title}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={6}
              bg="white"
              boxShadow="sm"
            >
              <Heading as="h2" size="md">
                {article.title}
              </Heading>
              <Text mt={3} color="gray.700">
                {article.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Stack
          mt={10}
          p={{ base: 5, md: 8 }}
          bg="gray.900"
          color="white"
          borderRadius="2xl"
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
        >
          <Box>
            <Heading as="h2" size="lg">
              Explore the menu next
            </Heading>
            <Text mt={2} color="whiteAlpha.800">
              Browse dish categories before ordering pickup, delivery, or
              catering.
            </Text>
          </Box>
          <Button as={NextLink} href="/menu" bg="#D92D26" color="white">
            View Menu
          </Button>
        </Stack>
      </Container>
    </>
  );
}
