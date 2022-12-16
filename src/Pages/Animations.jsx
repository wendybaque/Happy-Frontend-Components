import React from "react";
import AnimatedGallery from "../Components/AnimatedGallery";

const Animations = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">
        Animations...
      </h1>
      <p className="flex flex-col items-center text-l m-4">
        Lots of animations for fun !
      </p>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">
          Animated photo gallery
        </h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/Cl6BtJlPs8X/"
            alt="redirection vers le code de @webdevlessons"
          >
            @webdevlessons
          </a>
        </p>
        <AnimatedGallery />
      </section>
    </div>
  );
};

export default Animations;
