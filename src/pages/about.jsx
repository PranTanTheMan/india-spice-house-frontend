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
          content="India Spice house is a indian grocery and restaurant located in Eden Prairie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <AboutHero />
      <AboutContent />
    </>
  );
}
