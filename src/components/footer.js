import React from "react"

function Footer() {
  return (
    <div className="w-full bg-secondary rounded-3xl pt-10 mb-3">
      <div className="w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between py-10 gap-y-20">
        <div className="lg:w-5/12">
          <p className="text-3xl text-primary font-bold mb-10">Logo</p>

          <p className="text-white text-sm">
            Dive into our Frequently Asked Questions page for a comprehensive guide that addresses all your queries,
            ensuring an informed and confident approach to finding the perfect nanny for your family.
          </p>
        </div>

        <div>
          <p className="text-xl text-primary font-semibold mb-10">Get In Touch</p>

          <ul className="text-sm text-white">
            <li className="flex items-center gap-x-3 mb-5">
              <i className="material-icons text-primary">location_on</i> 8819 Ohio St. South Gate, CA 90280
            </li>

            <li className="flex items-center gap-x-3 mb-5">
              <i className="material-icons text-primary">mail</i> abc@hello.com
            </li>

            <li className="flex items-center gap-x-3">
              <i className="material-icons text-primary">phone</i> +1 386-688-3295
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl text-primary font-semibold mb-10">Services</p>

          <ul className="text-sm text-white">
            <li className="mb-5">Hire A Nanny</li>

            <li className="mb-5">Become A Nanny</li>

            <li className="mb-5">Frequently Asked Question</li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-xs text-center text-white font-light py-5">
        © Nanny Service 2024. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
