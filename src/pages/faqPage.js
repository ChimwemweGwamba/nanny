import React, { useState } from "react";
import faq from "../img/faq.png";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "What services do you offer?",
      answer: "We offer a range of nanny hiring services tailored to fit your family's needs, including full-time, part-time, live-in, and occasional babysitting."
    },
    {
      question: "How do I start the nanny hiring process?",
      answer: "To start the process, simply fill out our online registration form, and one of our team members will contact you to discuss your requirements and match you with suitable candidates."
    },
    {
      question: "What qualifications do your nannies have?",
      answer: "Our nannies undergo a thorough screening process, including background checks, reference checks, and interviews. Many of them have relevant certifications in childcare and years of experience."
    }
    // Add more FAQ items as needed
  ]);

  return (
    <div className='lg:w-[98%] w-[95%] mx-auto'>
      <NavBar />

      <div className='w-full bg-primary rounded-3xl'>
        <div className='w-11/12 h-full mx-auto flex lg:flex-row flex-col justify-between items-center'>
          <div className='lg:w-6/12 py-10 lg:py-0'>
            <p className='text-3xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight mb-10'>
              Got Questions? Check our FAQ’s
            </p>

            <p className='text-white text-sm'>
              Dive into our Frequently Asked Questions page for a comprehensive guide that addresses all your queries,
              ensuring an informed and confident approach to finding the perfect nanny for your family.
            </p>
          </div>

          <div className='lg:w-5/12 h-full'>
            <img src={faq} alt='bannerImg' className='w-10/12 mx-auto h-full object-cover' />
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto pt-10 pb-20'>
        {/* <p className='lg:w-8/12 text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold'>
          Unraveling Common Questions
        </p> */}

        {/* FAQ Section */}
        <div className="mt-10">
          {faqs.map((faq, index) => (
            <div className="mb-10" key={index}>
              <h2 className="text-xl lg:text-xl text-secondary font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700 textsm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FaqPage;
