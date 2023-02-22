import React from "react";
import FlagButtons from "../Components/FlagButtons";
import UniverseButton from "../Components/UniverseButton";

const Buttons = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">
        Buttons
      </h1>
      <p className="flex flex-col items-center text-l m-4">
        Buttons with differents styles, controls and designs
      </p>

      <section className="flex flex-col w-full m-12">
        <h2 className="font-semibold text-purple-500 m-4">
          Buttons with hover effect
        </h2>
        <p className="m-4">
          Based on{" "}
          <a
            href="https://uiverse.io/buttons"
            alt="redirection vers le code de universe.io"
          >
            universe.io buttons
          </a>
        </p>
        <UniverseButton />
      </section>

      <section className="flex flex-col w-full m-12">
        <h2 className="font-semibold text-purple-500 m-4">
          Buttons with flag effect
        </h2>
        <p className="m-4">
          Based on{" "}
          <a
            href="https://codepen.io/codingstella/pen/oNMzYrX"
            alt="redirection vers le code de coding stella"
          >
            Coding Stella code
          </a>
        </p>
        <FlagButtons />
      </section>
    </div>
  );
};

export default Buttons;
