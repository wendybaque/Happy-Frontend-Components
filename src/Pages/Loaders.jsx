import React from 'react'
import BouncingLoader from '../Components/BouncingLoader'
import Loader from '../Components/Loader'

const Loaders = () => {
  return (
    <div className="m-4 p-4 flex flex-col">
    <h1 className="flex flex-col items-center text-l font-semibold text-pink-500 font-poppins">Inputs</h1>
    <p className="flex flex-col items-center text-l m-4">Backgrounds with differents styles and designs</p>

    <section className="flex flex-col w-full m-12">
      <h2 className="m-2 font-semibold text-purple-500">Animated bouncing loader</h2>
      <p>
        Based on{" "}
        <a
          href="https://www.instagram.com/p/CjAVStVD75e/"
          alt="redirection vers le code de vlt_dev"
        >
          vlt_dev code
        </a>
      </p>
        <BouncingLoader />
    </section>

    <section className="flex flex-col w-full m-12">
      <h2 className="m-2 font-semibold text-purple-500">Animated bouncing loader</h2>
      <p>
        Based on{" "}
        <a
          href="https://www.instagram.com/p/Cl_ZoLJjHqf/"
          alt="redirection vers le code de jgancademy"
        >
          jgancademy code
        </a>
      </p>
        <Loader />
    </section>
    </div>
  )
}

export default Loaders