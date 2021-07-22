import React, { useState } from "react";
import { Houses } from "./houses/houses";
import { Level1 } from "./level1/level1";
import { Level2 } from "./level2/level2";
import { Level3 } from "./level3/level3";
import { Level4 } from "./level4/level4";

export const Levels = ({
  bearIsEntering,
  bearInsideLevel,
  handleDoorClick,
  goOutside
}) => {
  const isDeployed = window.origin.endsWith(".vercel.app");
  const [levelsAccepted, setLevelsAccepted] = useState([
    isDeployed,
    isDeployed,
    isDeployed,
    false
  ]);
  const [currentLevel, setCurrentLevel] = useState();

  const onDoorClick = door => {
    setCurrentLevel(door.level);
    handleDoorClick(door);
  };

  const onLevelAccepted = levelNumber => {
    setLevelsAccepted(levelsAccepted => {
      const newLevels = [...levelsAccepted];
      newLevels[levelNumber - 1] = true;
      return newLevels;
    });
  };

  const levelProps = levelNumber => {
    return {
      levelAccepted: levelsAccepted[levelNumber - 1],
      onLevelAccepted,
      currentLevel: bearInsideLevel && !bearIsEntering && currentLevel,
      goOutside
    };
  };

  return (
    <>
      {(!bearInsideLevel || bearIsEntering) && (
        <Houses handleDoorClick={onDoorClick} levelsAccepted={levelsAccepted} />
      )}
      <Level1 {...levelProps(1)} />
      <Level2 {...levelProps(2)} />
      <Level3 {...levelProps(3)} />
      <Level4 {...levelProps(4)} levelsAccepted={levelsAccepted} />
    </>
  );
};
