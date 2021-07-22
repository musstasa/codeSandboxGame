import styled, { keyframes } from "styled-components";
import bearImageUrl from './images/bear.png';
import bearWaveImageUrl from './images/bear-wave.png';

function moveRight(props) {
  return keyframes`
  from {
    background-position:-5px -93px;
  }
  25% {
    background-position: -51px -95px;
  }
  50% {
    background-position: -95px -93px;
  }
  75% {
    background-position: -141px -95px;
  }
  to {
    background-position: -5px -93px;
  }
`;
}

function moveLeft(props) {
  return keyframes`
  from {
    background-position: -5px -48px;
  }
  25% {
    background-position: -51px -50px;
  }
  50% {
    background-position: -96px -48px;
  }
  75% {
    background-position: -140px -50px;
  }
  to {
    background-position: -5px -48px;
  }
`;
}

const enterHouse = keyframes`
  from {
    background-position: -3px -138px;
  }
  25% {
    background-position: -48px -138px;
  }
  50% {
    background-position: -93px -138px;
  }
  75% {
    background-position: -138px -138px;
  }
  to {
    background-position: -3px -138px;
  }
`;

const wave = keyframes`
from {
  transform: translate(-3px);
  background-position: 0px -45px;
}
17% {
  background-position: -46px -45px;
}
33% {
  background-position: -90px -45px;
}
51% {
  background-position: -135px -45px;
}
67% {
  background-position: -90px -45px;
}
85% {
  background-position: -46px -45px;
}
to {
  transform: translate(-3px);
  background-position: 0px -45px;
}
`;

export const StyledBear = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-position: -3px 0;
  background-image: url(${bearImageUrl});

  &.is-going {
    animation: 0.6s
      ${props => (props.right ? moveRight(props) : moveLeft(props))} infinite
      step-start;
  }

  &.is-entering {
    background-position: -3px -138px;
    animation: 1s ${enterHouse} step-start;
  }

  &.wave {
    animation: 1s ${wave} step-start;
    background-image: url(${bearWaveImageUrl});
  }
`;

function transformAnimation(props) {
  const { finishCoordinate } = props;
  return keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(${finishCoordinate}px);
  }
`;
}

export const StyledBearWrapper = styled.div`
  position: absolute;
  left: ${({ startCoordinate }) => `${+startCoordinate - 16}px`};
  bottom: 50px;
  display: ${({insideLevel}) => insideLevel? 'none' : 'inline-block'};
  width: 38px;
  height: 43px;
  animation: linear forwards;
  animation-name: ${props => !props.animationStop && transformAnimation(props)};
  animation-duration: ${props =>
    !props.animationStop && `${props.animationDuration}s`};
`;
