import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";

import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>India Spice House | About</title>
        <meta
          name="description"
          content="India Spice House is a gourmet Indian restaurant and grocery store in Eden Prairie, Minnesota. We offer the best Indian cuisine, authentic Indian spices, and catering services for private events."
        />
        <meta
          name="keywords"
          content="Indian restaurant in Eden Prairie, Indian grocery store in Eden Prairie, Best Indian cuisine in Eden Prairie, Indian catering services in Eden Prairie, Private event hosting in Eden Prairie, India Spice House Eden Prairie, Gourmet Indian food in Eden Prairie, Indian food delivery in Eden Prairie, Authentic Indian spices in Eden Prairie, Eden Prairie Indian food specials, India Spice House Grocery, Indian Grocery near me, Grocery store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AboutHero />
      <AboutContent />
    </>
  );
}
