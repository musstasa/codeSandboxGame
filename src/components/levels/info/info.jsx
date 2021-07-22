import React, { useState } from "react";

import {
  StyledInfoWrapper,
  StyledInfoButton,
  StyledInfoModal,
  StyledCloseButton
} from "./info.styled";

export const Info = ({ content, buttonRight, buttonTop }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onInfoButtonClick = e => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const onCloseButtonClick = e => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledInfoButton
        right={buttonRight}
        top={buttonTop}
        onClick={onInfoButtonClick}
      />
      {isModalOpen && (
        <StyledInfoWrapper>
          <StyledInfoModal>
            {content}
            <StyledCloseButton onClick={onCloseButtonClick} />
          </StyledInfoModal>
        </StyledInfoWrapper>
      )}
    </>
  );
};
