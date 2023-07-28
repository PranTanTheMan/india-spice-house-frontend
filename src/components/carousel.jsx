import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Button,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://cdn.discordapp.com/attachments/928498867153014847/1133262725536030802/64.jpg",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/928498867153014847/1133262725821239326/65.jpg",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/928498867153014847/1133262726240686120/66.jpg",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/928498867153014847/1133262726525886464/70.jpg",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/928498867153014847/1133571037095796797/71.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"full"}
      width={"full"}
      overflow={"hidden"}
      // marginBottom={"-500px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        _hover={{ background: "#ffffff21" }}
        variant="ghost"
        color={"whiteAlpha.700"}
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="25px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        _hover={{ background: "#ffffff21" }}
        color={"whiteAlpha.700"}
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="25px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"full"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="100%"
              position="relative"
              zIndex={"999"}
              paddingBottom={"200px"}
            >
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
                flexDirection={"column"}
                pt={{ base: "230px", md: "310px" }}
              >
                <Heading
                  color={"white"}
                  fontSize={{ base: "xl", md: "4xl", lg: "7xl" }}
                >
                  Catering & Private Events
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="whiteAlpha.700"
                >
                  India Spice House takes your events to the next level with our
                  catering services, specializing in a variety of Indian cuisine
                  and live Tandoor cooking. We promise a unique, memorable
                  experience for your guests.
                </Text>
                <Stack mt={"10px"} flexDirection={"row"} spacing={5}>
                  <Button
                    as={"a"}
                    bgColor={"#D92D26"}
                    color={"white"}
                    transition={"all 0.3s ease"}
                    _hover={{ background: "#ffffff21" }}
                    href="#application"
                  >
                    Get Started
                  </Button>
                  <Button
                    as={"a"}
                    bgColor={"#D92D26"}
                    color={"white"}
                    transition={"all 0.3s ease"}
                    _hover={{ background: "#ffffff21" }}
                    href="#pdf"
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
