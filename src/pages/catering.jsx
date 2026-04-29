import React from "react";
import {
  Center,
  Heading,
} from "@chakra-ui/react";
import Carousel from "@/components/carousel";
import Seo from "@/components/Seo";

export default function Catering() {
  const pdffile = "/catering.pdf";
  return (
    <>
      <Seo
        title="Indian Catering in Eden Prairie, MN"
        description="Plan Indian catering and private events with India Spice House in Eden Prairie, MN. View the catering menu and submit a catering request online."
        path="/catering"
      />
      <Carousel />
      <Center h={"200vh"} pt={"20px"} flexDirection={"column"}>
        <iframe
          title="India Spice House catering menu PDF"
          id="pdf"
          style={{
            border: "0px transparent",
            overflow: "hidden",
            width: "90%",
            height: "100%",
            marginTop: "100px",
            marginBottom: "20px",
            scrollMarginTop: "100px",
          }}
          src={pdffile + "#zoom=100%"}
        ></iframe>
        <Heading scrollMarginTop={"150px"} id="application" mt={"150px"}>
          Catering Application
        </Heading>
        <iframe
          title="India Spice House catering application form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfjFTakC69x3BOOPyOFEr2QeDlHnTVMDlSPfyt5AdpaQJYr3A/viewform"
          width="100%"
          height="1520"
          style={{ paddingTop: "30px", marginBottom: "100px" }}
        >
          Loading…
        </iframe>
      </Center>
    </>
  );
}
