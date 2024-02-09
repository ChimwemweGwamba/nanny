import React from "react"

function WhyUs() {
  return (
    <div className="w-11/12 mx-auto py-20 lg:py-32">
      <p className="lg:w-8/12 mx-auto text-center text-sm font-light mb-2">Why Hire A Nanny with Us</p>

      <p className="lg:w-8/12 mx-auto text-center text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold">
        Ensuring Compatibility For Your Family's Needs
      </p>

      <div className="flex lg:flex-row flex-col gap-20 mt-20 lg:mt-32">
        <div className="lg:w-4/12 bg-primary2 px-5 py-10 rounded-xl">
          <i className="material-icons text-3xl text-white bg-primary py-2 px-3 rounded-full mb-10">fact_check</i>

          <p className="font-semibold text-secondary text-xl mb-4">Understanding Your Family Needs</p>

          <p className="text-sm">
            Our agency goes beyond simply connecting families with available nannies. We take the time to understand
            your unique family dynamics, preferences, and needs. By doing so, we expertly match you with a nanny whose
            skills and personality align seamlessly with your requirements
          </p>
        </div>

        <div className="lg:w-4/12 bg-primary2 px-5 py-10 rounded-xl">
          <i className="material-icons text-3xl text-white bg-primary py-2 px-3 rounded-full mb-10">how_to_reg</i>

          <p className="font-semibold text-secondary text-xl mb-4">Streamlined Selection Process</p>

          <p className="text-sm">
            We understand that the process of hiring a nanny can be overwhelming. That's why we've developed a
            streamlined selection process that eases the burden on families. From understanding your needs to presenting
            well-matched candidates, we're committed to simplifying the journey for you.
          </p>
        </div>

        <div className="lg:w-4/12 bg-primary2 px-5 py-10 rounded-xl">
          <i className="material-icons text-3xl text-white bg-primary py-2 px-3 rounded-full mb-10">verified</i>

          <p className="font-semibold text-secondary text-xl mb-4">Well-Trained, Certified Nannies</p>

          <p className="text-sm">
            Your child's safety is our top priority. When you hire a nanny through our agency, you can trust that they
            have undergone rigorous training, including CPR and First Aid certification. We prioritize the well-being of
            your children and ensure our nannies are well-equipped to handle any emergency situation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
