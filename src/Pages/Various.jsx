import React from 'react'
import HeartBeat from '../Components/HeartBeat'

const Various = () => {
  return (
<div>
      <div className="m-4 p-4 flex flex-col">
        <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Various items...</h1>
        <p className="flex flex-col items-center text-l m-4">Lots of items for fun !</p>

        <section className="flex flex-col">
          <h2 className="font-semibold text-purple-500">Heart Beat</h2>
          <p className="pb-10">
            Based on{" "}
            <a href="https://www.instagram.com/p/Chyf73jjcjl/" alt="redirection vers le code de html_learninget & frontend_vishal7">
              inspired by html_learninget & frontend_vishal7
            </a>
          </p>
          <HeartBeat />
        </section>

      </div>
    </div>
  )
}

export default Various
