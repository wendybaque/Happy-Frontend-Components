import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-body">
      <div className="loader-loader">
        <div className="face-loader">
          <div className="circle-loader"></div>
        </div>
        <div className="face-loader">
          <div className="circle-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
