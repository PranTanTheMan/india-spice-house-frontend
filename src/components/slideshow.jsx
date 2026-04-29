import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

const images = [
  { src: "/Gallery/1.jpg", alt: "India Spice House buffet and dining spread" },
  { src: "/Gallery/2.jpg", alt: "Indian restaurant entrees in Eden Prairie" },
  { src: "/Gallery/3.jpg", alt: "Fresh Indian dishes at India Spice House" },
  { src: "/Gallery/6.jpg", alt: "India Spice House Indian food platter" },
  { src: "/Gallery/7.jpg", alt: "Indian appetizers from India Spice House" },
  { src: "/Gallery/8.jpg", alt: "India Spice House curry and rice dishes" },
  { src: "/Gallery/9.jpg", alt: "Indian catering food from India Spice House" },
  { src: "/Gallery/10.jpg", alt: "India Spice House restaurant food display" },
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the current image index
    const updateImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 5.5 seconds
    const interval = setInterval(updateImageIndex, 4500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="full" height="100%">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          position="absolute"
          opacity={index === currentImageIndex ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          objectFit="cover"
          objectPosition="center"
          width="100%"
          height="100%"
        />
      ))}
      <Box position="relative" w="full" h="full" bg="blackAlpha.700" />
    </Box>
  );
};

export default Slideshow;
