import React from "react";

export const burgers = (ref) => (
  <div className="burgers" ref={ref}>
    <div className="burger for-mr-johnson">
      <div className="bottom-bun"></div>
      <div className="onion"></div>
      <div className="beef"></div>
      <div className="cheese"></div>
      <div className="pickles"></div>
      <div className="egg"></div>
      <div className="top-bun"></div>
    </div>
    <div className="burger for-mrs-johnson">
      <div className="bottom-bun"></div>
      <div className="tomato"></div>
      <div className="beef"></div>
      <div className="cheese"></div>
      <div className="pepper"></div>
      <div className="lettuce"></div>
      <div className="top-bun"></div>
    </div>
    <div className="burger for-little-peter">
      <div className="bottom-bun"></div>
      <div className="tomato"></div>
      <div className="bacon"></div>
      <div className="cheese"></div>
      <div className="egg"></div>
      <div className="top-bun"></div>
    </div>
  </div>
);
