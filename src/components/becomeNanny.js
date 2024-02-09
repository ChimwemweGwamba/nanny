import React from "react"
import bannerImg from "../img/banner.png"

function BecomeNanny() {
  return (
    <div className="w-11/12 mx-auto py-20 lg:py-32">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-20">
        <div className="lg:w-6/12 py-20 lg:py-0">
          <p className="text-3xl lg:text-5xl text-secondary font-semibold leading-tight lg:leading-tight mb-10">
            Looking for work? Become a certified Nanny Today
          </p>

          <p className="mb-10 text-sm">
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus
            lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
            Tellus consequat nisl quis nisl justo.
          </p>

          <div className="">
            <button className="text-white text-sm p-4 bg-secondary mr-10 rounded-3xl">
              Sign Up
            </button>

            <button className="text-white text-sm p-4 bg-secondary mr-10 rounded-3xl">
              Training Programs
            </button>
          </div>
        </div>

        <div className="lg:w-5/12 bg-red-500">
          <img src={bannerImg} alt="image" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  )
}

export default BecomeNanny
