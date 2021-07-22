import styled from "styled-components";

export const StyledInfoButton = styled.button`
  border-radius: 50%;
  border: 0;
  background-color: #71c700;
  width: 45px;
  height: 45px;
  outline: none;
  font-size: 26px;
  line-height: 45px;
  color: white;
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  right: ${({ right }) => (right ? right : 0)};
  z-index: 100;
  cursor: pointer;
  font-weight: 900;

  :after {
    display: inline-block;
    content: "?";
  }

  :hover {
    background-color: #5ba001;
  }
`;

export const StyledInfoWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 110;
`;

export const StyledInfoModal = styled.div`
  position: fixed;
  width: 600px;
  height: auto;
  max-height: 80%;
  overflow-y: auto;
  background: white;
  transform: translate(-50%, -50%);
  z-index: 120;
  top: 50%;
  left: 50%;
  padding: 30px;
  box-shadow: 0 0 350px 5px black;
  font-family: monospace;
  font-size: 15px;
  line-height: 17px;
  text-align: left;

  code {
    display: block;
    padding: 10px;
    margin: 5px 0;
    background: rgb(21, 21, 21);
    color: #caccce;
    border-radius: 10px;
  }

  a {
    &,
    &:visited,
    &:hover,
    &:focus {
      color: #71c700;
      font-weight: 600;
    }
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d4d4d4;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;

  :after {
    content: "+";
    display: inline-block;
    transform: rotate(45deg);
    font-size: 30px;
  }
`;
