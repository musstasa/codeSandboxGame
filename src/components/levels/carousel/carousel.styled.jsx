import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";

export const StyledCarousel = styled(Carousel)`
  width: ${({ width }) => (width ? width : "700px")};
  position: absolute;
  top: ${({ position }) =>
    position && position.top ? position.top : "inherit"};
  bottom: ${({ position }) =>
    position && position.bottom ? position.bottom : "inherit"};
  left: ${({ position }) =>
    position && position.left ? position.left : "50%"};
  transform: ${({ centered }) => (centered ? "translateX(-50%)" : "none")};
  z-index: 10;

  .BrainhubCarousel__trackContainer {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
  }

  .BrainhubCarouselItem {
    padding: 10px 0;
    font-family: monospace;
    font-size: 17px;
    line-height: 19px;
    font-weight: 600;
    min-height: 55px;

    p {
      margin: 0;
    }

    > * {
      width: 100%;
      padding: 0 40px;
    }
  }

  .BrainhubCarousel__arrows {
    background-color: transparent;
    color: blue;

    span {
      border-color: #225e7a;
    }

    &:hover,
    &:active,
    &:focus {
      background-color: transparent;

      span {
        border-color: #225e7a;
      }
    }

    &[disabled] {
      &:hover,
      &:active,
      &:focus,
      & {
        cursor: auto;

        span {
          border-color: #707f86;
        }
      }
    }
  }

  .BrainhubCarousel__arrowLeft {
    left: 40px;
    z-index: 2;
  }

  .BrainhubCarousel__arrowRight {
    right: 40px;
  }
`;
