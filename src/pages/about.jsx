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
export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
