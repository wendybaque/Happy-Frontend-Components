import React from "react";
import AnimatedColourText from "../Components/AnimatedColourText";
import Blob from "../Components/Blob";
import HeartBeat from "../Components/HeartBeat";
import Overlap from "../Components/Overlap";
import Valentine from "../Components/Valentine";

const Various = () => {
  return (
    <div>
      <div className="m-4 p-4 flex flex-col">
        <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">
          Various items...
        </h1>
        <p className="flex flex-col items-center text-l m-4">
          Lots of items for fun !
        </p>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500">Heart Beat</h2>
          <p className="pb-10">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/Chyf73jjcjl/"
              alt="redirection vers le code de html_learninget & frontend_vishal7"
            >
              inspired by html_learninget & frontend_vishal7 code
            </a>
          </p>
          <HeartBeat />
        </section>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500">Overlap</h2>
          <p className="pb-12 mb-44">
            Based on{" "}
            <a
              href="https://www.instagram.com/p/CfPScqdD-WE/"
              alt="redirection vers le code de faizan.webappdev"
            >
              faizan.webappdev code
            </a>
          </p>
          <Overlap />
        </section>
      </div>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">Animated colour text</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/Cj7jr7KD5cU/"
            alt="redirection vers le code de vlt_dev"
          >
            vlt_dev code
          </a>
        </p>
        <AnimatedColourText />
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">This is the blob !</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://www.instagram.com/p/Cl6MYvOjFRN/"
            alt="redirection vers le code de frontendcharm"
          >
            frontendcharm
          </a>
        </p>
        <Blob />
      </section>

      <section className="flex flex-col">
        <h2 className="font-semibold text-purple-500">This is the blob !</h2>
        <p className="pb-10">
          Based on{" "}
          <a
            href="https://codepen.io/lenasta92579651/pen/ExwdVOJ"
            alt="redirection vers le code de Lena Stanley"
          >
            Lena Stanley
          </a>
        </p>
        <Valentine />
      </section>
    </div>
  );
};

export default Various;
