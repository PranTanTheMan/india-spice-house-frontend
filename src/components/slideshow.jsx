import { useState, useEffect, useMemo } from "react";
import { Box, Image, AspectRatio } from "@chakra-ui/react";

const Slideshow = () => {
  // array of image URLs going up to
  const images = useMemo(
    () => [
      "/Gallery/1.jpg",
      "/Gallery/2.jpg",
      "/Gallery/3.jpg",
      "/Gallery/6.jpg",
      "/Gallery/7.jpg",
      "/Gallery/8.jpg",
      "/Gallery/9.jpg",
      "/Gallery/10.jpg",
    ],
    []
  );

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
  }, [images]);

  return (
    <Box position="relative" width="full" height="100%">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slideshow Image ${index}`}
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
