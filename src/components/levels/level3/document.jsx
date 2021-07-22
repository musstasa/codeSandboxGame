import React, { useEffect, useRef } from "react";

import { StyledDocument } from "./document.styled";

export const Document = ({
  name,
  phone,
  cooking,
  washing,
  styling,
  programming,
  onDocumentAccepted,
  currentLevel
}) => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const cookingRef = useRef();
  const stylingRef = useRef();
  const washingRef = useRef();
  const programmingRef = useRef();

  useEffect(() => {
    let accepted = true;
    accepted = nameRef.current.innerHTML === "Teddy Brown" ? accepted : false;
    accepted =
      phoneRef.current.innerHTML.split(" ").join("") === "+375441234567"
        ? accepted
        : false;
    accepted = cookingRef.current.innerHTML !== "" ? accepted : false;
    accepted = washingRef.current.innerHTML === "" ? accepted : false;
    accepted = stylingRef.current.innerHTML !== "" ? accepted : false;
    accepted = programmingRef.current.innerHTML !== "" ? accepted : false;
    accepted && onDocumentAccepted();
  });

  return (
    <StyledDocument>
      <h1>Report</h1>
      <p>
        <b>Name:</b> <span ref={nameRef}>{name}</span>
      </p>
      <p>
        <b>Phone:</b>{" "}
        <span ref={phoneRef} id="phone-value">
          {phone}
        </span>
      </p>
      <h4>Work has been done:</h4>
      <ul>
        <li>
          <span ref={cookingRef}>{cooking && <span>✓</span>}</span>Cooked 3
          burgers
        </li>
        <li>
          <span ref={washingRef}>{washing && <span>✓</span>}</span>
          Washed a car
        </li>
        <li>
          <span ref={stylingRef}>{styling && <span>✓</span>}</span>
          Styled a room
        </li>
        <li>
          <span ref={programmingRef}>{programming && <span>✓</span>}</span>
          Programmed a form
        </li>
      </ul>
    </StyledDocument>
  );
};
