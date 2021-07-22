import React from "react";
import { StyledCarousel } from "./carousel.styled";
import "@brainhubeu/react-carousel/lib/style.css";

export const CarouselWrapper = ({ slides, width, position, centered }) => {
  return (
    <StyledCarousel
      width={width}
      position={position}
      slides={slides}
      centered={centered}
      arrows
      clickToChange
      onClick={(e) => {e.stopPropagation()}}
    />
  );
};
