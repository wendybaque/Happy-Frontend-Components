import React from "react";
import "./infinitecarousel.css";

const InfiniteCarousel = () => {
  return (
    <div className="slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" checked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div className="testimonials">
        <label className="item" for="t-1">
          <img src="https://dummyimage.com/150" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nihil ipsam. Molestias porro at assumenda iusto est aliquam distinctio facilis sed quasi quos consectetur reprehenderit dolor expedita dolores, labore et?
          </p>
          <h2>Lorem Ipsum</h2>
        </label>
        <label className="item" for="t-2">
          <img src="https://dummyimage.com/150" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia quibusdam, porro animi eaque, tenetur voluptas illum neque quas, eveniet fugiat nam molestiae labore? Velit eius harum a molestias ab.
          </p>
          <h2>Lorem Ipsum</h2>
        </label>
        <label className="item" for="t-3">
          <img src="https://dummyimage.com/150" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit consequuntur. Voluptatum, obcaecati quisquam magnam, enim assumenda eius asperiores necessitatibus omnis sapiente animi sint excepturi nesciunt quo veniam ipsam dolore?
          </p>
          <h2>Lorem Ipsum</h2>
        </label>
        <label className="item" for="t-4">
          <img src="https://dummyimage.com/150" alt="" />
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vero nam quam unde maxime error laudantium dignissimos nulla iste nesciunt, commodi necessitatibus, fugit totam veniam numquam accusamus eius distinctio facere.
          </p>
          <h2>Lorem Ipsum</h2>
        </label>
        <label className="item" for="t-5">
          <img src="https://dummyimage.com/150" alt="" />
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ipsam ducimus dolorum modi error, eveniet, iusto doloremque fugiat ex ipsum quos commodi distinctio. Totam minus fugit molestiae fuga possimus et!
          </p>
          <h2>Lorem Ipsum</h2>
        </label>
      </div>
      <div className="dots">
        <label for="t-1"></label>
        <label for="t-2"></label>
        <label for="t-3"></label>
        <label for="t-4"></label>
        <label for="t-5"></label>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
