import Head from "next/head";
import Hero from "@/components/hero";
import Special from "@/components/special";
import PopularItems from "@/components/PopularItems";
import Delivery from "@/components/delivery";
import BusinessHoursLocation from "@/components/BusinessHoursLocation";

export default function Home() {
  return (
    <>
      <Head>
        <title>India Spice House | Home</title>
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
      <Hero />
      <Delivery />
      <Special />
      <PopularItems />
      <BusinessHoursLocation />
    </>
  );
}
