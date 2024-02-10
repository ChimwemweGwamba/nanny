import React from "react"
import faq from "../img/faq.png"
import NavBar from "../components/navBar"
import Footer from "../components/footer"

function Resources() {
  return (
    <div className='lg:w-[98%] w-[95%] mx-auto'>
      <NavBar />

      <div className='w-full bg-primary rounded-3xl'>
        <div className='w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center'>
          <div className='lg:w-6/12 py-10 lg:py-0'>
            <p className='text-3xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight mb-10'>
              Your Guide to Nanny Mastery.
            </p>

            <p className='text-white text-sm'>
              Embark on a transformative journey with our Nanny Training Guide, where excellence is not just a goal but
              a guarantee.
            </p>
          </div>

          <div className='lg:w-5/12 h-full'>
            <img src={faq} alt='bannerImg' className='w-10/12 mx-auto h-full object-cover' />
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto py-20'>
        <p className='lg:w-10/12 text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold'>
          Explore Our Comprehensive Nanny Training Curriculum Guide.
        </p>

        <p className='lg:w-10/12 text-sm mt-4'>
          From safety foundations to advanced techniques, we elevate every nanny's skills. Join us in creating enriching
          environments where learning thrives and childhoods flourish.
        </p>

        {/* FAQ Section */}
        <div className='mt-20'>
          <div className='mb-10'>
            <h2 className='text-xl lg:text-xl text-secondary font-semibold mb-2'>LEVEL 1- FOUNDATION</h2>
            <p className='text-gray-700 textsm'>
              The Basic Childcare program ensures that in home childcare providers can establish and maintain a safe,
              clean, and healthy environment for children.
              <br />
              <br />
              A. Understanding children
              <br />
              B. Emergency planning,( home, water and food safety.)
              <br />
              C. Legal requirements when working with children
              <br />
              D. Stress management
              <br />
              E. Positive discipline
            </p>
          </div>

          <div className='mb-10'>
            <h2 className='text-xl lg:text-xl text-secondary font-semibold mb-2'>LEVEL 2- CORE</h2>
            <p className='text-gray-700 textsm'>
              The Intermediate Childcare Certification –The focus of this program is the first 5 years of life. the Core
              level courses offers all the components of foundation level with advanced instruction on:
              <br />
              <br />
              A. Early childhood development <br />
              B. Child growth, and health. <br />
              C. Nutrition, motor skill development <br />
              D. Enrichment activities (reading and STEM)
            </p>
          </div>

          <div className='mb-10'>
            <h2 className='text-xl lg:text-xl text-secondary font-semibold mb-2'>LEVEL 3 -ADVANCED</h2>
            <p className='text-gray-700 textsm'>
              Advanced Childcare Certification Its undeniable that music, art, fitness, and helping with homework help
              children learn and thrive. This program includes academic support. The Advanced Childcare program teach
              nannies how to engage with children in a way that makes learning more fun. Nannies also gain better
              communicating skills with children and families.
            </p>
          </div>

          <div className='mb-10'>
            <h2 className='text-xl lg:text-xl text-secondary font-semibold mb-2'>LEVEL 4 - SPECIALISED</h2>
            <p className='text-gray-700 textsm'>
              Specialist Childcare Certification – Family assistants and household managers are increasingly popular
              with families and employers. Not just a nanny, family assistants can support special needs including
              medically required diets. Building on the Advanced program, the Specialist curriculum includes how to work
              with children at risk and special education environments. Family assistant jobs have elements of household
              management so additional training in etiquette, scheduling, and pet care is provided.
            </p>
          </div>

          <div className='mb-10'>
            <h2 className='text-xl lg:text-xl text-secondary font-semibold mb-2'>LEVEL 5 - MASTER</h2>
            <p className='text-gray-700 textsm'>
              Professional Childcare Certification – The Professional Childcare Certification shows that a nanny has
              successfully passed a rigorous training program that builds on the Specialist program and includes child
              development theories, multi-cultural activities, current trends in childcare, and human brain development.
              <br /> <br />
              Foreign language skills. Many families seek bilingual nannies who can support or teach children a second
              language. Exposing children to different language patterns as a young age can improve retention and
              fluency. Language skills can be used by infants in the form of sign language while 2 and 3 year-old can
              absorb new words as their language skills rapidly develop.{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Resources
