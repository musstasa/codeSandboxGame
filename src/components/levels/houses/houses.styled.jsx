import styled from "styled-components";
import housesImageUrl from './images/houses.png';
import groundImageUrl from './images/ground.png';

export const StyledGround = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-size: auto 100%;
  background-image: url(${groundImageUrl});
`;

export const StyledHouses = styled.div`
  width: 100%;
  height: 100%;
  background-size: 1600px 630px;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-color: #cff4fb;
  background-image: url(${housesImageUrl});
`;

export const StyledDoor = styled.div`
  position: absolute;
  width: 27px;
  height: ${props => props.height? props.height : '58px'};
  background-color: ${props => (props.open ? "#221e20" : "transparent")};
  left: ${props => props.left};
  bottom: 49px;
`;
