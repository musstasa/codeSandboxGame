import React, { useEffect, useRef, useState, useCallback } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import booksUrl from "./images/books.png";
import pictureUrl from "./images/picture.png";
import clockUrl from "./images/clock.png";
import arrowUrl from "./images/arrow.png";
import cactusUrl from "./images/cactus.png";

import {
  StyledLevel2,
  StyledButtons,
  StyledSignboard,
  StyledBedroom,
  StyledBooks,
  StyledVase,
  StyledCactus,
  StyledPicture,
  StyledClock,
  StyledFloor,
  StyledCarousel
} from "./level2.styled";
import { StyledButton } from "../levels.styled";

import {
  checkBedroom,
  checkVase,
  checkCactus,
  checkClock,
  checkPicture,
  checkBooks
} from "./level2.helper";
import { infoContent } from "./level2.info";
import { instructions, acceptInstructions } from "./level2.instructions";
import { slides } from "./level2.slides";
import { CarouselWrapper } from "../carousel/carousel";
import { Info } from "../info/info";

import "../../../quiz/level2.css";

export const Level2 = ({
  goOutside,
  levelAccepted,
  currentLevel,
  onLevelAccepted
}) => {
  const { width, height } = useWindowSize();

  const [confetti, setConfetti] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const bedroomRef = useRef();
  const vaseRef = useRef();
  const clockRef = useRef();
  const cactusRef = useRef();
  const pictureRef = useRef();
  const booksRef = useRef();

  const checkRoom = useCallback(() => {
    setConfetti(0);

    const isBedroomColorCorrect = checkBedroom(bedroomRef);
    const isVaseColorCorrect = checkVase(vaseRef);
    const isClockPosCorrect = checkClock(clockRef);
    const isCactusPosCorrect = checkCactus(cactusRef);
    const isPicturePosCorrect = checkPicture(pictureRef);
    const isBooksPosCorrect = checkBooks(booksRef);

    if (
      isBedroomColorCorrect &&
      isVaseColorCorrect &&
      isClockPosCorrect &&
      isCactusPosCorrect &&
      isPicturePosCorrect &&
      isBooksPosCorrect
    ) {
      setAccepted(true);
      setConfetti(300);

      setTimeout(() => setConfetti(0), 10000);
    } else {
      setAccepted(false);
    }

    if (
      currentLevel !== 2 &&
      !levelAccepted &&
      isBedroomColorCorrect &&
      isVaseColorCorrect &&
      isBooksPosCorrect
    ) {
      onLevelAccepted(2);
    }

    !levelAccepted && accepted && onLevelAccepted(2);
  }, [accepted, onLevelAccepted, levelAccepted, currentLevel]);

  useEffect(() => {
    checkRoom();
  }, [checkRoom]);

  return (
    <StyledLevel2
      isDisplayed={currentLevel === 2}
      ref={bedroomRef}
      className="room"
    >
      <Confetti
        width={width}
        height={height - 30}
        numberOfPieces={confetti}
        onConfettiComplete={() => {}}
      />

      <StyledButtons>
        <StyledButton
          left="calc(50% - 370px)"
          top="20px"
          backgroundColor="#05809b"
          onClick={e => {
            e.stopPropagation();
            goOutside(2);
          }}
        >
          Back
        </StyledButton>

        <StyledButton
          left="calc(50% - 435px)"
          top="70px"
          onClick={() => checkRoom()}
        >
          Check Room
        </StyledButton>

        {currentLevel === 2 && (
          <CarouselWrapper
            slides={accepted ? acceptInstructions : instructions}
            position={{ top: "20px" }}
            width="590px"
            centered
          />
        )}
      </StyledButtons>

      <Info
        content={infoContent}
        buttonRight="calc(50% - 310px)"
        buttonTop="45px"
      />

      <StyledBedroom>
        <StyledSignboard>
          {accepted ? "Room is styled" : "Needs styling"}
        </StyledSignboard>

        <StyledBooks ref={booksRef} src={booksUrl} className="books" />

        <StyledVase
          ref={vaseRef}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="30.000000pt"
          height="59.000000pt"
          viewBox="0 0 30.000000 59.000000"
          preserveAspectRatio="xMidYMid meet"
          className="vase"
        >
          <g
            transform="translate(0.000000,59.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M110 497 c0 -45 -5 -98 -10 -117 -26 -86 -60 -264 -60 -312 l0 -53
    110 3 110 3 0 35 c0 19 -16 113 -35 208 -20 101 -35 204 -35 245 l0 71 -40 0
    -40 0 0 -83z"
            />
          </g>
        </StyledVase>
        <StyledClock>
          <img src={clockUrl} alt="clock" />
          <img
            ref={clockRef}
            src={arrowUrl}
            className="clock"
            alt="clock arrow"
          />
        </StyledClock>

        <StyledPicture ref={pictureRef} src={pictureUrl} className="picture" />

        <StyledCactus ref={cactusRef} src={cactusUrl} className="cactus" />
      </StyledBedroom>

      {currentLevel === 2 && (
        <StyledCarousel>
          <CarouselWrapper
            slides={slides}
            position={{ bottom: "20px", left: "calc(50% + 45px)" }}
            width="400px"
          />
        </StyledCarousel>
      )}

      <StyledFloor />
    </StyledLevel2>
  );
};
