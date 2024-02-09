import React from "react"

function Banner() {
  return (
    <div className='flex flex-col items-start self-stretch px-20 py-12 mt-12 text-base font-semibold rounded-2xl bg-stone-500 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
      <div className='mt-20 ml-4 text-7xl text-white leading-[80px] w-[458px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]'>
        Looking For A Nanny?
      </div>
      <div className='mt-14 ml-4 leading-6 text-neutral-50 w-[435px] max-md:mt-10 max-md:max-w-full'>
        Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc
      </div>
      <div className='flex gap-5 justify-between mt-12 mb-24 ml-4 leading-[150%] max-md:flex-wrap max-md:my-10 max-md:max-w-full'>
        <div className='grow justify-center px-6 py-6 text-white bg-yellow-900 rounded-[40px] max-md:px-5'>
          Hire a nanny
        </div>
        <div className='grow justify-center px-6 py-6 text-yellow-900 bg-white rounded-[40px] max-md:px-5'>
          Become a nanny
        </div>
      </div>
    </div>
  )
}

export default Banner
