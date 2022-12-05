import React from "react";
import AnimatedColoursBg from "../Components/AnimatedColoursBg";
import AnimatedSquaresBg from "../Components/AnimatedSquaresBg";

const Backgrounds = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="flex flex-col text-pink-500 font-poppins">Inputs</h1>
      <p>Backgrounds with differents styles and designs</p>

      <section className="flex flex-col">
        <h2 className="m-2 text-purple-500">Animated background colors</h2>
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
        <h2 className="m-2 text-purple-500">Animated background with squares</h2>
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
