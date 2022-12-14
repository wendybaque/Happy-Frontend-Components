import React from "react";
import "./parallaxhero.css";

const ParallaxHero = () => {
  return (
    <>
      <div className="parallax-container">
        <h1>Mountain Star Zlatibor</h1>
        <p>
          Zlatibor is a mountain of exceptional beauty whose special
          geographical properties have made this mountain a real gem of western
          Serbia.
        </p>
        <a href="#" alt="">
          Learn more
        </a>
      </div>

      <div className="parallax-blank"></div>

      <div className="parallax-container second">
        <div className="parallax-item">
          <div className="img img-first"></div>
          <div className="parallax-card">
            <h3 className="parallax-h3">Rock climbing</h3>
            <p>
              The goal is to reach the summit of a formation or the endpoint of
              a usually pre-defined route without falling
            </p>
            <a href="#" alt="" className="parallax-link">
              Learn more
            </a>
          </div>
        </div>
        <div className="parallax-item">
          <div className="img img-second"></div>
          <div className="parallax-card">
            <h3 className="parallax-h3">Caving</h3>
            <p>
              Exploring underground through networks of tunnels and passageways,
              which can be natural or artificial.
            </p>
            <a href="#" alt="">
              Learn more
            </a>
          </div>
        </div>
        <div className="parallax-item">
          <div className="img img-third"></div>
          <div className="parallax-card">
            <h3 className="parallax-h3">Parachuting</h3>
            <p>
              Jumping from an aeroplane and falling through the air before
              opening your parachute.
            </p>
            <a href="#" alt="">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="parallax-blank"></div>
    </>
  );
};

export default ParallaxHero;
