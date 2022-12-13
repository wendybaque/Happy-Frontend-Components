import React from "react";

const MainHero = () => {
  return (
    <section class="font-poppins bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Some frontend components to reuse them and have them quickly at hand.
          </h1>
          <p class="m-4 p-4 mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            In React & Tailwind... and simple Html & CSS !
          <br/>
          <span>Navigate and explore with top right menu.</span>
          You can copy, use and modify them as you wish !
          </p>
          <a href="https://github.com/wendybaque/Happy-Frontend-Components" alt="got to the github repository">
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">GO TO THE GITHUB REPO</button>
          </a></div>
      </div>
    </section>
  );
};

export default MainHero;
