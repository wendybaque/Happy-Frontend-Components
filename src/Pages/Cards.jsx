import React from "react";
import HeapCard from "../Components/HeapCard";
import HoverEffect from "../Components/HoverEffect";
import InfiniteCarousel from "../Components/InfiniteCarousel";

const Cards = () => {
  return (
    <div>
      <div className="m-4 p-4 flex flex-col">
        <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Inputs</h1>
        <p className="flex flex-col items-center text-l m-4">Cards with differents styles and designs</p>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500">Card title</h2>
          <p className="pb-10">
            Based on{" "}
            <a href="https://www.instagram.com/p/Ck5pKIIDrmn/" alt="redirection vers le code de @webdevlessons">
              inspired by @webdevlesson code
            </a>
          </p>
          <HeapCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">Hover Effect cards</h2>
          <p className="m-4">
            Based on{" "}
            <a href="https://github.com/S-Najim-S/instagram-reels-source-code/tree/main/image-hover-effect" alt="redirection vers le code de S-Najim-S">
              inspired by S-Najim-S code
            </a>
          </p>
          < HoverEffect/>
        </section>

        <section className="flex flex-col infinite-carousel">
          <h2 className="font-semibold text-purple-500 m-4">Infinite Carousel</h2>
          <p className="m-4">
            Based on{" "}
            <a href="https://codepen.io/medrupaloscil/pen/OJNrLLX" alt="redirection vers le code de Fehrenbach Baptiste">
              inspired by Fehrenbach Baptiste code
            </a>
          </p>
          <InfiniteCarousel />
        </section>
      </div>
    </div>
  );
};

export default Cards;
