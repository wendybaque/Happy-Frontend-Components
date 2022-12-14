import React from 'react'
import ParallaxHero from '../Components/ParallaxHero'
import ParallaxScrolling from '../Components/ParallaxScrolling'
import WavyHero from '../Components/WavyHero'

const Hero = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Inputs</h1>
      <p className="flex flex-col items-center text-l m-4">Backgrounds with differents styles and designs</p>

      <section className="flex flex-col">
        <h2 className="m-2 font-semibold text-purple-500">Animated wavy hero</h2>
        <p>
          Based on{" "}
          <a
            href="https://www.instagram.com/p/CgjbhMbj2Dk/"
            alt="redirection vers le code de htmldoodler "
          >
            htmldoodle & codinghashira code
          </a>
        </p>
        <WavyHero />
      </section>

      <section className="flex flex-col">
        <h2 className="m-2 font-semibold text-purple-500">Parallax Hero</h2>
        <p>
          Based on{" "}
          <a
            href="https://codepen.io/DuskoStamenic/pen/ZEvBKdw"
            alt="redirection vers le code de Dusko Stamenic  "
          >
            Dusko Stamenic et webdevlessons
          </a>
        </p>
        <ParallaxHero />
      </section>

      <section className="flex flex-col">
        <h2 className="m-2 font-semibold text-purple-500">Scrolling parallax Hero</h2>
        <p>
          Based on{" "}
          <a
            href="https://codepen.io/Denis-Alex/pen/dyvLYPa"
            alt="redirection vers le code de Denis Alex "
          >
            Denis Alex
          </a>
        </p>
        < ParallaxScrolling/>
      </section>
    </div>
  )
}

export default Hero