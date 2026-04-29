import Hero from "@/components/hero";
import Special from "@/components/special";
import PopularItems from "@/components/PopularItems";
import Delivery from "@/components/delivery";
import BusinessHoursLocation from "@/components/BusinessHoursLocation";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Indian Restaurant & Grocery in Eden Prairie, MN"
        description="India Spice House is an Indian restaurant and grocery store in Eden Prairie, MN serving biryani, dosa, curries, tandoori dishes, catering, pickup, and delivery."
      />
      <Hero />
      <Delivery />
      <Special />
      <PopularItems />
      <BusinessHoursLocation />
    </>
  );
}
