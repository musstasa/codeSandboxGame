import styled from "styled-components";

import burgerImageUrl from "./images/burger.png";
import plateImageUrl from "./images/plate.png";
import tableImageUrl from "./images/table.png";
import kitchenImageUrl from "./images/kitchen.png";
import ceramicImageUrl from "./images/ceramic.png";

import { StyledLevel } from "../levels.styled";

export const StyledLevel1 = styled(StyledLevel)`
  position: relative;
  background-image: url(${kitchenImageUrl});
  background-color: #9281a2;
  background-size: 890px;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const StyledGround = styled.div`
  width: 100%;
  height: 77px;
  position: absolute;
  bottom: 0;
  background-image: url(${ceramicImageUrl});
`;

export const StyledBurger = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  bottom: 0;

  .burgers {
    display: flex;
    background-image: url(${tableImageUrl});
    background-position: center bottom;
    background-repeat: no-repeat;
    height: 100%;
  }

  .burger {
    height: 100px;
    width: 74px;
    position: absolute;
    left: calc(50% - 140px);

    &:nth-child(2) {
      left: calc(50% - 37px);
    }

    &:nth-child(3) {
      left: calc(50% + 67px);
    }

    &:before {
      width: 99px;
      height: 47px;
      content: "";
      display: block;
      position: absolute;
      background-size: contain;
      bottom: -18px;
      left: -11px;
      background-image: url(${plateImageUrl});
    }

    div {
      position: absolute;
      background-image: url(${burgerImageUrl});
    }

    .top-bun {
      width: 74px;
      height: 48px;
      z-index: 9;
      bottom: 50px;
      background-position: -13px -20px;
    }

    &.for-mrs-johnson .top-bun {
      bottom: 45px;
    }

    &.for-little-peter .top-bun {
      bottom: 45px;
    }

    .egg {
      width: 81px;
      height: 32px;
      z-index: 8;
      bottom: 35px;
      background-position: -107px -138px;
    }

    &.for-mr-johnson .egg {
      bottom: 40px;
    }

    .pickles {
      width: 74px;
      height: 35px;
      z-index: 7;
      bottom: 32px;
      background-position: -13px -85px;
    }

    .lettuce {
      width: 81px;
      height: 35px;
      z-index: 7;
      bottom: 35px;
      background-position: -107px -31px;
    }

    .pepper {
      width: 81px;
      height: 38px;
      z-index: 6;
      bottom: 30px;
      background-position: -107px -238px;
    }

    .cheese {
      width: 81px;
      height: 37px;
      z-index: 5;
      bottom: 22px;
      background-position: -107px -86px;
    }

    .beef {
      width: 81px;
      height: 34px;
      z-index: 4;
      bottom: 20px;
      background-position: -107px -188px;
    }

    .onion {
      width: 74px;
      height: 35px;
      z-index: 3;
      bottom: 13px;
      background-position: -13px -135px;
    }

    .bacon {
      width: 81px;
      height: 32px;
      z-index: 3;
      bottom: 20px;
      background-position: -203px -28px;
    }

    .tomato {
      width: 81px;
      height: 32px;
      z-index: 2;
      bottom: 13px;
      background-position: -203px -138px;
    }

    .bottom-bun {
      width: 81px;
      height: 40px;
      z-index: 1;
      bottom: 0;
      background-position: -202px -241px;
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  .BrainhubCarouselItem {
    & > div > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      position: static;
    }

    .burger {
      height: auto;
      position: static;

      &:before {
        display: none;
      }

      & > div {
        position: static;
      }
    }
  }
`;
