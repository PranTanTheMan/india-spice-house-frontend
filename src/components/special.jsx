import React from "react";
import {
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";

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
        <iframe
          title="India Spice House Facebook specials feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Findiaspicehouseep&tabs=timeline&width=320&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=770204758187734"
          width="320"
          height="700"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Center>
    </>
  );
}
