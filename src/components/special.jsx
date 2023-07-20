import React from "react";
import {
  Box,
  Center,
  Heading,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Special() {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0"
        nonce="F9yayCcL"
      ></script>
      <Center
        scrollMarginTop={"140px"}
        id="specials"
        mb={"2rem"}
        mt={"7rem"}
        flexDirection={"column"}
      >
        <Heading>Specials</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
      </Center>

      <Center w={"100%"} flexDirection={"column"}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Findiaspicehouseep&width=320&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="320"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Center>
    </>
  );
}
