import React from "react";
import { StyledBurger } from "./level1.styled";

export const slides = [
  <div>
    <StyledBurger>
      <div className="burger">
        <div className="top-bun" />
      </div>
    </StyledBurger>
    <code>top-bun</code>
    <StyledBurger style={{ marginTop: "20px" }}>
      <div className="burger">
        <div className="bottom-bun" />
      </div>
    </StyledBurger>
    <code>bottom-bun</code>
  </div>,

  <div>
    <StyledBurger>
      <div className="burger">
        <div className="bacon" />
      </div>
    </StyledBurger>
    <code>bacon</code>
    <StyledBurger style={{ marginTop: "20px" }}>
      <div className="burger">
        <div className="beef" />
      </div>
    </StyledBurger>
    <code>beef</code>
  </div>,

  <div>
    <StyledBurger>
      <div className="burger">
        <div className="egg" />
      </div>
    </StyledBurger>
    <code>egg</code>
    <StyledBurger style={{ marginTop: "20px" }}>
      <div className="burger">
        <div className="pickles" />
      </div>
    </StyledBurger>
    <code>pickles</code>
  </div>,

  <div>
    <StyledBurger>
      <div className="burger">
        <div className="onion" />
      </div>
    </StyledBurger>
    <code>onion</code>
    <StyledBurger style={{ marginTop: "20px" }}>
      <div className="burger">
        <div className="cheese" />
      </div>
    </StyledBurger>
    <code>cheese</code>
  </div>,

  <div>
    <StyledBurger>
      <div className="burger">
        <div className="lettuce" />
      </div>
    </StyledBurger>
    <code>lettuce</code>
    <StyledBurger style={{ marginTop: "20px" }}>
      <div className="burger">
        <div className="pepper" />
      </div>
    </StyledBurger>
    <code>pepper</code>
  </div>,
  
  <div>
    <StyledBurger>
      <div className="burger">
        <div className="tomato" />
      </div>
    </StyledBurger>
    <code>tomato</code>
  </div>
];
