import React from 'react';
import "./flipcard.css";
import book from "../assets/book.png";

const FlipCard = () => {
  return (
    <div className='flip-body'>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={book} alt="3D book" />
            <h3>The best book</h3>
        </div>
        <div className="flip-card-back">
        <img src={book} alt="3D book" />
          <h4>The best book</h4>
          <h3>30€</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FlipCard