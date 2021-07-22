import styled from "styled-components";

export const StyledLevel = styled.div`
  height: 100%;
  display: ${({ isDisplayed }) => `${isDisplayed ? "block" : "none"}`};
`;

export const StyledButtons = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(255, 255, 255, 0.2)"};
  height: ${({ height }) => height || "120px"};
`;

export const StyledButton = styled.button`
  padding: 10px 30px;
  font-weight: 600;
  font-family: monospace;
  font-size: 20px;
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  left: ${({ left }) => (left ? left : 0)};
  cursor: pointer;
  outline: none;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#86c238"};
  border: 0;
  border-radius: 8px;
  color: white;
  z-index: 20;
`;
