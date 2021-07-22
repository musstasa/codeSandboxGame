import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { burgers } from "../../../quiz/level1";
import { CarouselWrapper } from "../carousel/carousel";
import { StyledButton } from "../levels.styled";
import { Info } from "../info/info";

import {
  StyledGround,
  StyledBurger,
  StyledLevel1,
  StyledCarouselWrapper
} from "./level1.styled";
import { infoContent } from "./level1.info";
import { classNames } from "./level1.classes";
import { instructions, acceptInstructions } from "./level1.instructions";
import { slides } from "./level1.slides";
import { checkAllIngredients, checkBurgers } from "./level1.helpers";

export const Level1 = ({
  currentLevel,
  levelAccepted,
  onLevelAccepted,
  goOutside
}) => {
  const { width, height } = useWindowSize();

  const burgersRef = useRef();
  const levelRef = useRef();

  const [accepted, setAccepted] = useState(false);
  const [confetti, setConfetti] = useState(0);

  useEffect(() => {
    setConfetti(0);

    let isAccepted = true;
    isAccepted =
      burgersRef.current.className !== "burgers" ? false : isAccepted;
    const burgers = burgersRef.current.querySelectorAll("div.burger");
    isAccepted = checkBurgers(burgers, classNames.burgers) ? isAccepted : false;
    isAccepted = checkAllIngredients(burgers, classNames.ingredients)
      ? isAccepted
      : false;

    if (isAccepted !== accepted) {
      setAccepted(isAccepted);
      isAccepted && onLevelAccepted(1);
    }

    if (isAccepted) {
      setConfetti(300);
      setTimeout(() => setConfetti(0), 10000);
    }
  }, [levelAccepted, accepted, onLevelAccepted]);

  return (
    <StyledLevel1 isDisplayed={currentLevel === 1} ref={levelRef}>
      {currentLevel === 1 && (
        <>
          <CarouselWrapper
            slides={accepted ? acceptInstructions : instructions}
            position={{ top: "20px" }}
            centered
          />
          <StyledCarouselWrapper>
            <CarouselWrapper
              slides={slides}
              position={{ bottom: "20px", left: "calc(50% - 470px)" }}
              width="300px"
            />
          </StyledCarouselWrapper>
        </>
      )}

      <Info
        content={infoContent}
        buttonRight="calc(50% - 365px)"
        buttonTop="35px"
      />

      <Confetti
        numberOfPieces={confetti}
        onConfettiComplete={() => {}}
        width={width}
        height={height - 30}
      />

      <StyledButton
        left="calc(50% - 425px)"
        top="35px"
        backgroundColor="#4f3d5f"
        onClick={e => {
          e.stopPropagation();
          goOutside(1);
        }}
      >
        Back
      </StyledButton>

      <StyledGround />

      <StyledBurger>{burgers(burgersRef)}</StyledBurger>
    </StyledLevel1>
  );
};
