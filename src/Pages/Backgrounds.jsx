import React from "react";
import AnimatedColoursBg from "../Components/AnimatedColoursBg";
import AnimatedSquaresBg from "../Components/AnimatedSquaresBg";

const Backgrounds = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Inputs</h1>
      <p className="flex flex-col items-center text-l m-4">Backgrounds with differents styles and designs</p>

      <section className="flex flex-col">
        <h2 className="m-2 font-semibold text-purple-500">Animated background colors</h2>
        <p>
          Based on{" "}
          <a
            href="https://alvarotrigo.com/blog/animated-backgrounds-css/"
            alt="redirection vers le code de alvarotrigo "
          >
            alvaro trigo code
          </a>
        </p>
        <AnimatedColoursBg />
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold m-2 text-purple-500">Animated background with squares</h2>
        <p>
          Based on{" "}
          <a
            href="https://alvarotrigo.com/blog/animated-backgrounds-css/"
            alt="redirection vers le code de alvarotrigo "
          >
            alvaro trigo code
          </a>
        </p>
        <AnimatedSquaresBg />
      </section>
    </div>
  );
};

export default Backgrounds;
