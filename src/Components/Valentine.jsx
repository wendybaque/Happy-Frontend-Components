import React from "react";
import "./valentine.css";

const Valentine = () => {
  return (
    <div className="valentine-body">
      <div className="valentines-day">
        <div className="valentine-envelope"></div>
        <div className="valentine-heart"></div>
        <div className="valentine-text">
          HAPPY VALENTINE'S
          <br /> DAY!
        </div>
        <div className="front"></div>
        <div className="text2">hover over the envelope</div>
      </div>
    </div>
  );
};

export default Valentine;
