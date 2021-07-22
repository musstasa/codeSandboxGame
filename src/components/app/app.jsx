import React, { useState, useRef, useEffect } from "react";
import { Bear } from "../bear/bear";
import { AppWrapper } from "./app.styled";
import { Levels } from "../levels/levels";
import { doors } from "../levels/houses/doors";

export const App = () => {
  const wrapperRef = useRef();
  const [coordinates, setCoordinates] = useState({
    x: -20,
    y: 0
  });
  const [bearIsEntering, setBearIsEntering] = useState(false);
  const [bearInsideLevel, setBearInsideLevel] = useState(false);
  const [bearOutside, setBearOutside] = useState();

  useEffect(() => {
    setCoordinates(coordinates => {
      return {
        x: parseInt(getComputedStyle(wrapperRef.current).width, 10) / 2 - 420,
        y: coordinates.y
      };
    });
  }, []);

  const handleClick = e => {
    if (!bearInsideLevel && e.clientY > 100) {
      const rect = e.currentTarget.getBoundingClientRect(),
        offsetX = e.clientX - rect.left,
        offsetY = e.clientY - rect.top;
      setCoordinates({ x: offsetX, y: offsetY });
    }
  };

  const handleDoorClick = door => {
    setCoordinates({
      x:
        parseInt(getComputedStyle(wrapperRef.current).width, 10) / 2 -
        door.offsetX,
      y: door.offsetY
    });
    door.open && setBearIsEntering(true);
  };

  const handleEnterHouse = () => {
    setBearIsEntering(false);
    setBearInsideLevel(true);
    setCoordinates({
      x: parseInt(getComputedStyle(wrapperRef.current).width, 10) / 2 - 420,
      y: 0
    });
  };

  const goOutside = level => {
    const door = doors[level - 1];
    const x =
      parseInt(getComputedStyle(wrapperRef.current).width, 10) / 2 -
      door.offsetX;
    setBearInsideLevel(false);
    setBearOutside(x);
    setCoordinates({
      x,
      y: door.offsetY
    });
  };

  return (
    <AppWrapper onClick={handleClick} ref={wrapperRef}>
      <Levels
        bearIsEntering={bearIsEntering}
        bearInsideLevel={bearInsideLevel}
        handleDoorClick={handleDoorClick}
        goOutside={goOutside}
      />
      <Bear
        coordinateX={coordinates.x}
        bearIsEntering={bearIsEntering}
        bearInsideLevel={bearInsideLevel}
        bearOutside={bearOutside}
        handleEnterHouse={handleEnterHouse}
      />
    </AppWrapper>
  );
};
