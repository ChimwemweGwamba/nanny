import React from "react"
import Banner from "../components/banner"
import WhyUs from "../components/whyUs"
import Discover from "../components/discover"

function Home() {
  return (
    <div className="lg:w-[98%] w-[95%] mx-auto">
      {/* <Banner />
      <WhyUs /> */}
      <Discover />
    </div>
  )
}

export default Home
