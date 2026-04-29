import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Seo from "@/components/Seo";
import { galleryImages } from "@/lib/siteData";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Food & Grocery Gallery"
        description="View India Spice House food, catering, Indian grocery, biryani, naan, and curry photos from our Eden Prairie restaurant and grocery store."
        path="/gallery"
      />
      <Box bg="gray.900" color="white" pt="190px" pb={{ base: 16, md: 20 }}>
        <Container maxW="5xl" textAlign="center">
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }}>
            India Spice House Gallery
          </Heading>
          <Text mt={5} fontSize={{ base: "md", md: "xl" }}>
            A look at our Indian food, catering, restaurant, and grocery
            offerings in Eden Prairie.
          </Text>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {galleryImages.map((image) => (
            <Box
              key={image.src}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                h="280px"
                w="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
