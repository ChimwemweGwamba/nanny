import React from "react"
import bannerImg from "../img/banner.png"

function Banner() {
  return (
    <div className="w-full lg:h-[80vh] bg-primary rounded-3xl">
      <div className="w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-5/12 py-20 lg:py-0">
          <p className="text-5xl lg:text-6xl text-white font-semibold leading-tight lg:leading-tight mb-10">Looking For A Nanny?</p>

          <p className="text-white mb-10">
            Your will have everything nearby supermarket, buses, station, the carmen neighborhood, etc
          </p>

          <div className="">
            <button className="text-white text-sm p-4 bg-secondary mr-10 rounded-3xl">Hire a nanny</button>

            <button className="text-secondary text-sm p-4 bg-white rounded-3xl">Become a nanny</button>
          </div>
        </div>

        <div className="lg:w-6/12 h-full">
          <img src={bannerImg} alt="bannerImg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Banner
