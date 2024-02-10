import React from "react"
import image1 from "../img/process1.jpg"
import image2 from "../img/process2.jpg"
import image3 from "../img/process3.jpg"
import image4 from "../img/process4.jpg"

function HowItWorks() {
  return (
    <div className="w-11/12 mx-auto py-20 lg:py-32">
      <p className="text-sm font-light mb-2">How It Works</p>

      <p className="lg:w-8/12 text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold">
        Navigating The Journey To Your Ideal Nanny.
      </p>

      <div className="mt-20">
        <div className="flex lg:flex-row flex-col justify-between items-center mb-20">
          <img src={image1} alt="image" className="w-full lg:w-5/12 object-cover rounded-xl lg:mb-0 mb-10" />

          <div className="lg:w-5/12">
            <p className="text-2xl lg:text-4xl text-secondary leading-tight lg:leading-tight font-semibold mb-5 lg:mb-10">
              1. Intake Form
            </p>

            <p className="text-sm">
              To kickstart the process, fill out our comprehensive intake form. This form provides us with essential
              insights into your family's unique needs, preferences, and specific requirements. The more we understand
              about your dynamics, the better we can tailor our search.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center mb-20">
          <img src={image2} alt="image" className="w-full lg:w-5/12 object-cover rounded-xl lg:mb-0 mb-10" />

          <div className="lg:w-5/12">
            <p className="text-2xl lg:text-4xl text-secondary leading-tight lg:leading-tight font-semibold mb-5 lg:mb-10">
              2. Consultation
            </p>

            <p className="text-sm">
              Following the intake form, we schedule a personalized consultation to delve deeper into your expectations.
              This consultation is an opportunity for you to express your preferences, discuss your family's lifestyle,
              and clarify any specific qualities you seek in a nanny.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center mb-20">
          <img src={image3} alt="image" className="w-full lg:w-5/12 object-cover rounded-xl lg:mb-0 mb-10" />

          <div className="lg:w-5/12">
            <p className="text-2xl lg:text-4xl text-secondary leading-tight lg:leading-tight font-semibold mb-5 lg:mb-10">
              3. Contract Signing
            </p>

            <p className="text-sm">
              Once we've identified potential candidates, and you've found a match that aligns with your expectations,
              we move forward with a clear and concise contract. Our contracts are designed to protect both the employer
              and the nanny, outlining expectations, responsibilities, and terms of service.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center mb-20">
          <img src={image4} alt="image" className="w-full lg:w-5/12 object-cover rounded-xl lg:mb-0 mb-10" />

          <div className="lg:w-5/12">
            <p className="text-2xl lg:text-4xl text-secondary leading-tight lg:leading-tight font-semibold mb-5 lg:mb-10">
              4. Find the Right Fit
            </p>

            <p className="text-sm">
              Our commitment extends beyond the signing of the contract. We understand that the success of this
              partnership lies in the compatibility between your family and the nanny. If, for any reason, the initially
              selected nanny does not meet your expectations, we provide a free referral replacement within the first
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
