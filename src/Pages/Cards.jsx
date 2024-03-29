import React from "react";
import CardHoverRound from "../Components/CardHoverRound";
import FigcaptionHover from "../Components/FigcaptionHover";
import FlipCard from "../Components/FlipCard";
import GlassCard from "../Components/GlassCard";
import HeapCard from "../Components/HeapCard";
import HoverEffect from "../Components/HoverEffect";
import InfiniteCarousel from "../Components/InfiniteCarousel";
import ProfileCard from "../Components/ProfileCard";
import TriangleCard from "../Components/TriangleCard";

const Cards = () => {
  return (
    <div>
      <div className="m-4 p-4 flex flex-col">
        <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">
          Cards
        </h1>
        <p className="flex flex-col items-center text-l m-4">
          Cards with differents styles and designs
        </p>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500">Heap cards</h2>
          <p className="pb-10">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/Ck5pKIIDrmn/"
              alt="redirection vers le code de @webdevlessons"
            >
              inspired by @webdevlesson code
            </a>
          </p>
          <HeapCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            Hover Effect cards
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://github.com/S-Najim-S/instagram-reels-source-code/tree/main/image-hover-effect"
              alt="redirection vers le code de S-Najim-S"
            >
              S-Najim-S code
            </a>
          </p>
          <HoverEffect />
        </section>

        <section className="flex flex-col infinite-carousel">
          <h2 className="font-semibold text-purple-500 m-4">
            Infinite Carousel
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://codepen.io/medrupaloscil/pen/OJNrLLX"
              alt="redirection vers le code de Fehrenbach Baptiste"
            >
              Fehrenbach Baptiste code
            </a>
          </p>
          <InfiniteCarousel />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            Fig Caption on hover card
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/CkSNLjVuR4a/"
              alt="redirection vers le code de baby_wolf_codes"
            >
              baby_wolf_codes
            </a>
          </p>
          <FigcaptionHover />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            On card flip effect
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/CfzEDhCDQkz/"
              alt="redirection vers le code de avance_dev"
            >
              avance_dev
            </a>
          </p>
          <FlipCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            Glass effect card
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/Cdr1GJpO9ZS/"
              alt="redirection vers le code de codewith_random"
            >
              codewith_random
            </a>
          </p>
          <GlassCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">Profile card</h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/Cdr1GJpO9ZS/"
              alt="redirection vers le code de codewith_random"
            >
              codewith_random
            </a>
          </p>
          <ProfileCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            Triangle profile card
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/CnEkW47AHrO/"
              alt="redirection vers le code de kyngcoder"
            >
              kyngcoder
            </a>
          </p>
          <TriangleCard />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500 m-4">
            Card Hover with rounds
          </h2>
          <p className="m-4">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/Clu2DsquJRc/"
              alt="redirection vers le code de webdesignuniversity              "
            >
              webdesignuniversity code
            </a>
          </p>
          <CardHoverRound />
        </section>
      </div>
    </div>
  );
};

export default Cards;
