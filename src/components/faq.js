import React from "react"
import faq from "../img/faq.png"

function FAQ() {
  return (
    <div className="w-full bg-primary rounded-3xl">
      <div className="w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-6/12 py-20 lg:py-0">
          <p className="text-3xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight mb-10">
            Got Questions? Check Our Frequently Asked Questions
          </p>

          <p className="text-white mb-10 text-sm">
            Here, we answer common queries about our Specialty Nanny services. If you have questions about what we offer
            or how we can assist you, you're in the right place!
          </p>

          <div className="">
            <button className="text-white text-sm p-4 bg-secondary mr-10 rounded-3xl">
              Frequently Asked Questions
            </button>
          </div>
        </div>

        <div className="lg:w-5/12 h-full">
          <img src={faq} alt="bannerImg" className="w-10/12 mx-auto h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default FAQ
