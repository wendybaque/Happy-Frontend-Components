import React from "react";
import AnimatedBg from "../Components/AnimatedBg";
import FlipText from "../Components/FlipText";
import Glitter from "../Components/Glitter";
import NeonText from "../Components/NeonText";
import RolloText from "../Components/RolloText";
import WaveText from "../Components/WaveText";

const Texts = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">
        Texts items...
      </h1>
      <p className="flex flex-col items-center text-l m-4">
        Lots of texts effects for fun !
      </p>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Neon Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/Ce2mqa3pttD/"
            alt="redirection vers le code de baby_wolf_codes"
          >
            baby_wolf_codes
          </a>
        </p>
        <NeonText />
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Rollo Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/ClxVR0TPFAi/"
            alt="redirection vers le code de web_talks"
          >
            web_talks
          </a>
        </p>
        <RolloText/>
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Wavy Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/CmL28xljX6p/"
            alt="redirection vers le code de vlt_dev"
          >
            vlt_dev
          </a>
        </p>
        <WaveText/>
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Glitter Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://codepen.io/lenasta92579651/pen/qBoEVzG"
            alt="redirection vers le code de Lena Stanley"
          >
            Lena Stanley
          </a>
        </p>
        <Glitter/>
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Flip Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://codepen.io/lenasta92579651/pen/xxYqGVo"
            alt="redirection vers le code de Lena Stanley"
          >
            Lena Stanley
          </a>
        </p>
        <FlipText/>
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Animated Background Text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://codepen.io/frontendcharm/pen/yLKYavK"
            alt="redirection vers le code d'Ariba Madakia'"
          >
            Ariba Madakia
          </a>
        </p>
        <AnimatedBg/>
      </section>
    </div>
  );
};

export default Texts;
