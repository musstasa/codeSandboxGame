import React from "react";

import { CarouselWrapper } from "../carousel/carousel";

import {
  deployInstructions,
  instructions,
  startInstructions,
  winInstructions,
  level4Instructions
} from "./houses.instructions";
import { doors } from "./doors";
import { StyledHouses, StyledGround, StyledDoor } from "./houses.styled";

export const Houses = ({ handleDoorClick, levelsAccepted }) => {
  const isDeployed = window.origin.endsWith("now.sh");

  levelsAccepted.forEach((levelAccepted, index) => {
    if (levelAccepted || levelsAccepted[index - 1] || index === 0) {
      doors[index].open = true;
    } else {
      doors[index].open = false;
    }
  });

  return (
    <StyledHouses>
      {doors.map((door, index) => {
        return (
          <StyledDoor
            key={`door${door.left}`}
            left={door.left}
            height={door.height}
            open={door.open}
            onClick={e => {
              e.stopPropagation();
              handleDoorClick(door);
            }}
          />
        );
      })}

      <CarouselWrapper
        slides={
          levelsAccepted[3]
            ? winInstructions
            : isDeployed
            ? deployInstructions
            : levelsAccepted[2]
            ? level4Instructions
            : !levelsAccepted[0]
            ? startInstructions
            : instructions
        }
        position={{ top: "20px", left: "50%" }}
        width="590px"
        centered
      />
      <StyledGround />
    </StyledHouses>
  );
};
