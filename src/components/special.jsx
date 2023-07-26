import React from "react";
import {
  Box,
  Center,
  Heading,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";

export default function Special() {
  return (
    <>
      <Center
        scrollMarginTop={"140px"}
        id="specials"
        mb={"2rem"}
        mt={{ base: "-7rem", lg: "-2.5rem" }}
        flexDirection={"column"}
      >
        <Heading>Specials</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
      </Center>

      <Center w={"100%"} flexDirection={"column"}>
        {/* <Box
          mx={"auto"}
          w={"100%"}
          maxW={"600px"}
          h={"400px"}
          border={"1px solid red"}
          dropShadow={"2xl"}
        >
          <Image
            src="/Gallery/1.jpg"
            alt="Specials"
            objectFit="cover"
            layout="fill"
          />
          <Text>Specials today!</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            quibusdam voluptatibus consectetur labore laborum beatae laboriosam,
            veritatis nihil, eum culpa unde architecto quas doloremque
            dignissimos libero explicabo sed modi dolor?
          </Text>
        </Box> */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Findiaspicehouseep&tabs=timeline&width=320&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=770204758187734"
          width="320"
          height="700"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Center>
    </>
  );
}
