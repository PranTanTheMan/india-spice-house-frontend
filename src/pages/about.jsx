import React from "react";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import Seo from "@/components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About Our Indian Restaurant & Grocery"
        description="Learn about India Spice House, an Indian restaurant and grocery store serving Eden Prairie with Indian food, spices, groceries, catering, pickup, and delivery."
        path="/about"
      />
      <AboutHero />
      <AboutContent />
    </>
  );
}
