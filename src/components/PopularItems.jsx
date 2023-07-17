import React from "react";

import { Box, Center, Heading } from "@chakra-ui/react";

import PopularItemsCard from "./PopularItemsCard";

export default function PopularItems() {
  return (
    <>
      <Center mb={"2rem"} mt={"15rem"} flexDirection={"column"}>
        <Heading>Popular Items</Heading>
        <Box w="70px" h="2px" bg="black" mt={"10px"} />
      </Center>
      <PopularItemsCard />
    </>
  );
}
