import React from "react";
import HeapCard from "../Components/HeapCard";
import HoverEffect from "../Components/HoverEffect";

const Cards = () => {
  return (
    <div>
      <div className="m-4 p-4 flex flex-col">
        <h1 className="flex flex-col text-pink-500 font-poppins">Inputs</h1>
        <p>Cards with differents styles and designs</p>

        <section className="flex flex-col">
          <h2 className="m-10 text-purple-500">Card title</h2>
          <p>
            Based on{" "}
            <a href="https://www.instagram.com/p/Ck5pKIIDrmn/" alt="redirection vers le code de @webdevlessons">
              inspired by @webdevlesson code
            </a>
          </p>
          <HeapCard />
        </section>

        <section className="flex flex-col">
          <h2 className="m-2 text-purple-500">Hover Effect cards</h2>
          <p>
            Based on{" "}
            <a href="https://github.com/S-Najim-S/instagram-reels-source-code/tree/main/image-hover-effect" alt="redirection vers le code de S-Najim-S">
              inspired by S-Najim-S code
            </a>
          </p>
          < HoverEffect/>
        </section>
      </div>
    </div>
  );
};

export default Cards;
