import React from 'react';
import "./trianglecard.css";

const TriangleCard = () => {
  return (
    <div>
        <div className="card__collection clear-fix">
      <div className="cards cards--two">
        <img
          src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
          className="img-responsive"
          alt=""
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-linkedin-in"></i></li>
        </ul>
      </div>
      <div className="cards cards--two">
        <img
          src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
          className="img-responsive"
          alt=""
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Gotham Chess</p>
        <ul className="cards__list">
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-linkedin-in"></i></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default TriangleCard