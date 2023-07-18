import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

const Slideshow = () => {
  // array of image URLs sounds like urine
  const images = ["1.jpg", "2.jpg", "3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the current image index
    const updateImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 5.5 seconds
    const interval = setInterval(updateImageIndex, 5500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box position="relative" width="full" height="full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slideshow Image ${index}`}
          position="absolute"
          opacity={index === currentImageIndex ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      ))}
      <Box position="absolute" w="full" h="full" bg="blackAlpha.700" />
    </Box>
  );
};

export default Slideshow;