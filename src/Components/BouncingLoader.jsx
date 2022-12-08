import React from "react";
import "./bouncingloader.css";

const BouncingLoader = () => {
  return (
    <div className="bouncing-container">
      <div className="bouncing-circle"></div>
      <div className="bouncing-circle"></div>
      <div className="bouncing-circle"></div>
      <div className="bouncing-shadow"></div>
      <div className="bouncing-shadow"></div>
      <div className="bouncing-shadow"></div>
      <div className="bouncing-shadow"></div>
    </div>
  );
};

export default BouncingLoader;
