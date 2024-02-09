import React from "react"
import Banner from "../components/banner"
import WhyUs from "../components/whyUs"
import Discover from "../components/discover"
import HowItWorks from "../components/howItWorks"
import FAQ from "../components/faq"
import BecomeNanny from "../components/becomeNanny"

function Home() {
  return (
    <div className="lg:w-[98%] w-[95%] mx-auto">
      <Banner />
      <WhyUs /> 
      <Discover /> 
      <HowItWorks />
      <FAQ />
      <BecomeNanny />
    </div>
  )
}

export default Home
