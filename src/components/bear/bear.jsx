import React, { useEffect, useRef, useState } from "react";
import { StyledBearWrapper, StyledBear } from "./bear.styled";

export const Bear = ({
  coordinateX,
  bearIsEntering,
  bearInsideLevel,
  bearOutside,
  handleEnterHouse
}) => {
  const bearRef = useRef();
  const bearInnerRef = useRef();
  const [startCoordinate, setStartCoordinate] = useState(coordinateX);
  const [animationStop, setAnimationStop] = useState(true);

  useEffect(() => {
    const bearRefCurrent = bearRef.current;
    const listener = () => {
      setStartCoordinate(coordinateX);
      setAnimationStop(true);
    };
    bearRefCurrent.addEventListener("animationend", listener);
    return () => {
      bearRefCurrent.removeEventListener("animationend", listener);
    };
  }, [coordinateX]);

  useEffect(() => {
    startCoordinate !== coordinateX && setAnimationStop(false);
  }, [coordinateX, startCoordinate]);

  useEffect(() => {
    if (bearIsEntering) {
      const bearInnerRefCurrent = bearInnerRef.current;
      const listener = () => {
        handleEnterHouse();
        setStartCoordinate(0);
      };
      bearInnerRefCurrent.addEventListener("animationend", listener);
      return () => {
        bearInnerRefCurrent.removeEventListener("animationend", listener);
      };
    }
  }, [bearIsEntering, handleEnterHouse]);

  useEffect(() => {
    if (bearOutside && !bearInsideLevel) {
      setStartCoordinate(bearOutside);
      setAnimationStop(true);
    }
  }, [bearOutside, bearInsideLevel]);

  return (
    <StyledBearWrapper
      ref={bearRef}
      startCoordinate={startCoordinate}
      finishCoordinate={coordinateX - startCoordinate}
      insideLevel={bearInsideLevel}
      animationStop={animationStop}
      animationDuration={Math.abs(coordinateX - startCoordinate) * 0.015}
    >
      <StyledBear
        ref={bearInnerRef}
        right={coordinateX - startCoordinate >= 0}
        className={
          !animationStop ? "is-going" : bearIsEntering ? "is-entering" : "wave"
        }
      />
    </StyledBearWrapper>
  );
};
