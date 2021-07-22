import React, { useState, useCallback, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { CarouselWrapper } from "../carousel/carousel";
import { StyledButton } from "../levels.styled";
import { QuizLevel3 } from "../../../quiz/level3";
import { Info } from "../info/info";

import { Document } from "./document";
import {
  StyledLevel3,
  StyledComputer,
  StyledGround,
  StyledComputerScreen,
  RoundButton
} from "./level3.styled";
import { infoContent } from "./level3.info";
import { instructions, acceptedInstructions } from "./level3.instructions";

export const Level3 = ({
  levelAccepted,
  onLevelAccepted,
  goOutside,
  currentLevel
}) => {
  const { width, height } = useWindowSize();

  const [confetti, setConfetti] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [computerOn, setComputerOn] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCookingDone, setCookingDone] = useState(false);
  const [isStylingDone, setStylingDone] = useState(false);
  const [isWashingDone, setWashingDone] = useState(false);
  const [isProgrammingDone, setProgrammingDone] = useState(false);

  const applyRef = useRef();

  const onDocumentAccepted = useCallback(() => {
    setAccepted(true);
    setConfetti(120);

    setTimeout(() => setConfetti(0), 10000);

    !levelAccepted && accepted && onLevelAccepted(3);
  }, [accepted, onLevelAccepted, levelAccepted]);

  useEffect(() => {
    if (currentLevel !== 3 && !levelAccepted) {
      document.getElementById("phone-input").value = "44";
      document.getElementById("apply-button").click();

      if (
        document
          .getElementById("phone-value")
          .innerHTML.split(" ")
          .join("") === "+37544"
      ) {
        !levelAccepted && onLevelAccepted(3);
      }
    }
  }, [onLevelAccepted, levelAccepted, currentLevel]);

  useEffect(() => {
    if (currentLevel === 3) {
      document.getElementById("phone-input").value = "";
      document.getElementById("phone-value").innerHTML = "";
    }
  }, [currentLevel]);

  return (
    <StyledLevel3 isDisplayed={currentLevel === 3}>
      {!computerOn && (
        <StyledButton
          left="calc(50% - 420px)"
          top="35px"
          backgroundColor="#05809b"
          onClick={e => {
            e.stopPropagation();
            goOutside(3);
          }}
        >
          Back
        </StyledButton>
      )}

      {currentLevel === 3 && (
        <CarouselWrapper
          slides={accepted ? acceptedInstructions : instructions}
          position={{ top: "20px", left: "50%" }}
          width="680px"
          centered
        />
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

      <StyledGround />

      <button className="open" onClick={() => setComputerOn(true)}>
        CLICK
      </button>

      <StyledComputer style={{ display: computerOn ? "block" : "none" }}>
        <StyledComputerScreen>
          <QuizLevel3
            applyRef={applyRef}
            sendName={setName}
            sendPhone={setPhone}
            sendWashingDone={setWashingDone}
            sendStylingDone={setStylingDone}
            sendCookingDone={setCookingDone}
            sendProgrammingDone={setProgrammingDone}
          />

          <Document
            name={name}
            phone={phone}
            cooking={isCookingDone}
            styling={isStylingDone}
            programming={isProgrammingDone}
            washing={isWashingDone}
            onDocumentAccepted={onDocumentAccepted}
            currentLevel={currentLevel}
          />
        </StyledComputerScreen>

        <RoundButton
          left="calc(50% - 360px)"
          top="35px"
          backgroundColor="#05809b"
          onClick={() => setComputerOn(false)}
        >
          &#10006;
        </RoundButton>
      </StyledComputer>
    </StyledLevel3>
  );
};
