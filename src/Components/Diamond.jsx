import React from "react";
import "./diamond.css";

const Diamond = () => {
  return (
    <div className="diamond-body-body">
      <div className="diamond-body">
        <div className="diamond-container">
          <div className="diamond">
            <div className="diamond-top"></div>
            <div className="diamond-bottom"></div>
          </div>
          <div className="sparkles">
            <div className="one">✨</div>
            <div className="two">✨</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
