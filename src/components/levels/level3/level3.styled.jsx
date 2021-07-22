import styled from "styled-components";
import { StyledLevel, StyledButton } from "../levels.styled";

import roomImageUrl from "./images/room.png";
import floorImageUrl from "./images/floor.png";
import compImageUrl from "./images/computer.png";

export const StyledLevel3 = styled(StyledLevel)`
  position: relative;
  background-image: url(${roomImageUrl});
  background-color: #a8a5db;
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: center calc(100% - 35px);
  bottom: 0;
  z-index: 1000;

  button.open {
    width: 128px;
    height: 79px;
    background: transparent;
    position: absolute;
    right: calc(50% - 360px);
    bottom: 245px;
    border: none;
    color: transparent;
  }

  button.open:hover {
    cursor: pointer;
    color: grey;
  }
`;

export const StyledComputerScreen = styled.div`
  height: 360px;
  width: 600px;
  background-image: url(${compImageUrl});
  background-size: 100% 100%;
  position: absolute;
  top: calc(50% - 150px);
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledComputer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(210, 250, 250, 0.7);

  .document-input {
    padding: 0 10px;
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 35px;
    overflow: hidden;
    width: 33%;
  }

  .document-input input {
    display: block;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 7px;
    border: 0;
    outline: none;
    font-family: monospace;
    font-size: 15px;
  }

  .document-input label {
    display: block;
    text-align: left;
    font-weight: bold;
    color: white;
    font-family: monospace;
    font-size: 16px;
    margin-bottom: 7px;
  }

  .document-input input[type="submit"] {
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    margin: auto;
    padding: 7px 20px;
    color: white;
    float: right;
    font-family: monospace;
    font-size: 16px;
  }

  .document-input input[type="submit"]:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
    transition: ease-in 100ms;
  }

  #activities-input {
    width: auto;
    text-align: left;

    label {
      font-weight: normal;
      display: inline-block;
      text-align: left;
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;

      & + label {
        position: relative;
        cursor: pointer;
        padding: 0;
      }

      & + label:before {
        content: "";
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        width: 18px;
        height: 18px;
        background: white;
      }

      &:hover + label:before {
        background: rgba(0,0,0,0.5);
      }

      &:focus + label:before {
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
      }

      &:checked + label:before {
        background: rgba(0,0,0,0.5);
      }

      &:disabled + label {
        color: #b8b8b8;
        cursor: auto;
      }

      &:disabled + label:before {
        box-shadow: none;
        background: #ddd;
      }

      &:checked + label:after {
        content: "";
        position: absolute;
        left: 4px;
        top: 8px;
        background: white;
        width: 2px;
        height: 2px;
        box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
          4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
        transform: rotate(45deg);
      }
    }
  }
`;

export const StyledGround = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-image: url(${floorImageUrl});
`;

export const RoundButton = styled(StyledButton)`
  width: 45px;
  height: 45px;
  padding: 0;
  line-height: 14px;
  border-radius: 50%;
`;
