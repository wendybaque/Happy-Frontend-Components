import React from "react";
import "./cardhoverround.css";

const CardHoverRound = () => {
  return (
    <div className="card-container-flex">
        Hover it !
      <div className="card-hover-div">
        <div className="card-circle-top"></div>
        <div className="card-circle-bottom"></div>
        <div className="card-description">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            adipisci inventore deserunt minus facilis laborum nobis incidunt ad
            ab odio fugit vel dolore, cum amet commodi, iusto voluptas fuga
            quis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHoverRound;
