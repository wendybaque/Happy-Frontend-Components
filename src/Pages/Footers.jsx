import React from 'react'

const Footers = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
      <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Footers</h1>
      <p className="flex flex-col items-center text-l m-4">Footers with differents styles and designs</p>

      <section className="flex flex-col">
        <h2 className="m-2 font-semibold text-purple-500">Footer</h2>
        <p>
          Based on{" "}
          <a
            href="https://alvarotrigo.com/blog/animated-backgrounds-css/"
            alt="redirection vers le code de alvarotrigo "
          >
            XXX
          </a>
        </p>
      </section>
    </div>
  )
}

export default Footers