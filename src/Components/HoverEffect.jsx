import React from "react";
import "../Components/hovereffect.css";

export default function HoverEffect() {
  return (
    <div className="container">
      <div className="box">
        <a href="*" alt="redirection">
          <div className="imgBx">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/17/14/24/woman-944261_960_720.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="overflow-y-hidden">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </a>
      </div>

      <div className="box">
        <a href="*" alt="redirection">
          <div className="imgBx">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg"
              alt=""
            />
          </div>

          <div className="content">
            <div className="overflow-y-hidden">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </a>
      </div>

      <div className="box">
        <a href="*" alt="redirection">
          <div className="imgBx">
            <img
              src="https://cdn.pixabay.com/photo/2016/09/27/23/03/guitar-1699501_960_720.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="overflow-y-hidden">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </a>
      </div>

      <div className="box">
        <a href="*" alt="redirection">
          <div className="imgBx">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/13/02/52/girl-842719_960_720.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="overflow-y-hidden">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
