import styled from "styled-components";

import roomUrl from "./images/room.png";
import signboardUrl from "./images/signboard.png";
import floorUrl from "./images/floor.png";

export const StyledLevel2 = styled.div`
  display: ${({ isDisplayed }) => `${isDisplayed ? "flex" : "none"}`};
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const StyledButtons = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
  height: 120px;
`;

export const StyledFloor = styled.div`
  background-image: url(${floorUrl});
  background-repeat: repeat;
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const StyledSignboard = styled.div`
  position: absolute;
  top: 166px;
  left: 5px;
  color: #f1f1f1;
  font-size: 16px;
  padding: 44px 0 0 0;
  background-image: url(${signboardUrl});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  height: 81px;
  width: 120px;
  font-weight: bold;
`;

export const StyledBedroom = styled.div`
  position: absolute;
  height: 480px;
  width: 614px;
  background-image: url(${roomUrl});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const StyledCactus = styled.img`
  position: absolute;
  top: 184px;
  left: 294px;
`;

export const StyledBooks = styled.img`
  position: absolute;
  top: 307px;
  left: 70px;
  z-index: 20;
`;

export const StyledClock = styled.div`
  position: absolute;
  top: 92px;
  left: 36px;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledPicture = styled.img`
  position: absolute;
  top: 106px;
  left: 116px;
  transform: scale(0.7);
`;

export const StyledVase = styled.svg`
  position: absolute;
  top: 106px;
  right: 189px;
  height: 45px;
`;

export const StyledCarousel = styled.div`
  img,
  svg {
    position: static;
    margin-bottom: 20px;
    transform: none;
    max-height: 75px;
    width: auto;
  }

  .BrainhubCarouselItem {
    p {
      margin-bottom: 20px;
    }

    code {
      white-space: nowrap;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cactus {
      transform: scale(-1, 1);
    }

    ${StyledClock} {
      position: relative;
      width: 56px;
      height: 56px;
      margin-bottom: 20px;
      top: 0;
      left: 0;

      img {
        position: absolute;
        top: 0;
        left: 0;
      }

      .clock {
        transform: rotate(-90deg);
      }
    }

    .picture {
      transform: scale(1);
    }

    .vase {
      fill: #c69495;
    }
  }
`;
