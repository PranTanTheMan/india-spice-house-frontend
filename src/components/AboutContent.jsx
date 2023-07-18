import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import React from "react";

export default function AboutContent() {
  const philisophy = [
    {
      title: "Fresh",
      description:
        "Fresh ingredients, Fresh food, Fresh taste. India Spice House pulsates with the spirit of offering an energetic dining experience that takes guests on an eclectic culinary adventure through some of the most popular cuisines of different parts of India.",
    },
    {
      title: "Tasty",
      description:
        "Got an appetite? Relish exotic spices and aromatic herbs, right at your table and ready to go.",
    },
    {
      title: "Comfortable",
      description:
        "Be yourself and come as you are - just out of bed, right off the field or after a night out.",
    },
    {
      title: "Relaxed",
      description:
        "What's the rush? Experience the exquisite simplicity of authentic indian food at India Spice House, with food that awakens the senses with subtle flavors, creative flair and delicate finesse.",
    },
    {
      title: "Special",
      description:
        "laughing. Sharing. Enjoying. Memories are made everyday at the table - you don't need a special occasion. dining at India Spice House itself is a occasion to celebrate.",
    },
  ];

  const vision = [
    {
      title: "Integrity",
      description:
        "We do the right thing. We are comitted to the highest ehtical standards.",
    },
    {
      title: "Excellence",
      description: "We expect the best from ourselves and each other.",
    },
    {
      title: "Innovation",
      description: "We find creative, new ways to delight our guests.",
    },
    {
      title: "Accountability",
      description:
        "We do what we say we will do. We are responsible for our actions.",
    },
    {
      title: "Inclusion",
      description:
        "We respecct and value the diversity of others. We benefit from many points of view",
    },
    {
      title: "Trust",
      description:
        "We collaborate and build trust through open, honest communication.",
    },
  ];

  return (
    <>
      <Box id="learn"></Box>
      <Flex
        minH={"90vh"}
        ml={{ base: 0, lg: "4rem" }}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        mt={"100px"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} pb={"15px"}>
          <Heading>Who we are</Heading>
          <Box w="70px" h="2px" bg="black" mt={"10px"} />
        </Stack>
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          <Text
            textAlign={{ base: "center", lg: "left" }}
            mx={{ base: "auto", lg: "0" }}
            w={{ base: "375px", lg: "900px" }}
          >
            India Spice House is a gourmet Indian cuisine located in Eden
            Prairie and serving twin cities since 2008, India Spice House has
            garnered best name over the years and understands the importance of
            gathering together and eating well. The freshness, taste, and
            overall quality of our food has won the acceptance of all those who
            love to eat the way it is prepared back in India. If enjoying food
            is on the agenda, then India Spice House is the place in Minnesota!
            You will find not just one delectable dish but many equally
            fantastic dishes to entice your palate. Our menu and services have
            greatly expanded to reflect the wishes of our growing clientele and
            the environment around us. Explore our exciting menu that offers the
            variety that fine cooking will give in both traditional and business
            settings!
            <br />
            <br />
            At India Spice House, we prepare our food with different Indian
            Spices and Herbs, meticulously cooked to create mouth lingering
            dishes. Each dish has its own distinctive flavor & aromas, which
            cannot come from any curry powder in the world. Our food is not just
            'Spicy' or 'Curry'. It all depends what you wish to eat! We prepare
            great tasting authentic Indian food with all exquisite Kebabs, North
            Indian delights, best of South Indian cuisine and our exotic Indo
            Chinese dishes for the discerning palate! along with a large range
            of Indian sweets.
            <br />
            <br />
            Besides restaurant India Spice House also provides Catering service
            serving North Indian, South Indian and Indo-Chinese cuisines. Chefs
            at India spice House will try to cater for any particular need you
            may have. We have a small banquet to hold 45 people for customers to
            host parties. We can also set it up for businesses to hold their
            meetings or conferences with lunch served in a buffet style.
            <br />
            <br />
            We serve lunch buffet Monday - Saturday, where you can enjoy "all
            you can eat" extensive varieties of India food. If you are new to
            Indian food, we would suggest you try out great selection of items
            in our daily lunch buffet. Our dinner service is ala-carte. You have
            a wide range of varieties to choose from an extensive menu we
            created to please taste buds of our customers.
          </Text>
          <Image
            src="/3.jpg"
            borderRadius={"full"}
            h={{ base: "250px", lg: "550px" }}
            w={{ base: "250px", lg: "550px" }}
            ml={{ base: "0", lg: "70px !important" }}
            mx={{ base: "auto", lg: "0" }}
          />
        </Stack>
      </Flex>
      <SimpleGrid
        gap={{
          base: "4",
          md: "6",
        }}
        columns={{
          base: 1,
          md: 2,
        }}
        mb={"75px"}
        mx={{ base: "0", lg: "350px" }}
        textAlign={"center"}
      >
        <Stack>
          <Heading mb={"30px"}>Philosophy</Heading>
          <SimpleGrid column={2}>
            {philisophy.map((item) => (
              <Box
                bgGradient="linear-gradient(45deg, #ffa500, #D92D26)"
                borderRadius="md"
                p={4}
                boxShadow="md"
                color="white"
                maxW={{ base: "100%", sm: "300px" }}
                mx="auto"
                mb={8}
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
        <Stack>
          <Heading mb={"30px"}>Vision</Heading>
          <SimpleGrid column={2} row={3}>
            {vision.map((item) => (
              <Box
                bgGradient="linear-gradient(45deg, #ffa500, #D92D26)"
                borderRadius="md"
                p={4}
                boxShadow="md"
                color="white"
                maxW={{ base: "100%", sm: "300px" }}
                mx="auto"
                mb={8}
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </>
  );
}
