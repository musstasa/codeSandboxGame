import styled from "styled-components";

import roomImageUrl from "./images/room.png";
import floorImageUrl from "./images/wooden-floor.png";
import carpetImageUrl from "./images/carpet.png";
import winnerImageUrl from "./images/winner.png";

import { StyledLevel } from "../levels.styled";

export const StyledLevel4 = styled(StyledLevel)`
  position: relative;
  background-image: url(${roomImageUrl});
  background-color: #90dec8;
  background-size: 750px;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const StyledGround = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  background-image: url(${floorImageUrl});
`;

export const StyledCarpet = styled.div`
  background-image: url(${carpetImageUrl});
  position: absolute;
  height: 50px;
  width: 466px;
  bottom: 20px;
  left: calc(50% + 180px);
  transform: translateX(-50%);
  background-size: cover;
`;

export const StyledWinner = styled.div`
  background-image: url(${winnerImageUrl});
  position: absolute;
  height: 325px;
  width: 569px;
  top: 50%;
  left: 50%;
  background-size: contain;
  transform: translate(-50%, -50%);
`;
