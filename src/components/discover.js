import React from "react"
import discover1 from "../img/discover1.jpg"
import discover2 from "../img/discover2.jpg"
import discover3 from "../img/discover3.jpg"
import discover4 from "../img/discover4.jpg"
import discover5 from "../img/discover5.jpg"
import discover6 from "../img/discover6.jpg"

function Discover() {
  return (
    <div className="w-full bg-primary2 rounded-3xl py-20 lg:py-32">
      <div className="w-11/12 h-full mx-auto">
        <p className="text-sm font-light mb-2">Explore Nanny Options</p>

        <p className="lg:w-8/12 text-3xl lg:text-5xl text-secondary leading-tight lg:leading-tight font-semibold">
          Discover Your Nanny Match
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          <div className="">
            <img src={discover1} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Parents’ Helper</p>
            <p className="text-sm">
              Entry-level caregivers working under direct supervision, assisting with child care, playtime, and light
              housework. CPR and First Aid training are prerequisites.
            </p>
          </div>

          <div className="">
            <img src={discover3} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Sitters</p>
            <p className="text-sm">
              Evening or weekend caregivers available by phone, performing light housekeeping and childcare duties. CPR,
              First Aid certification, and childcare training are recommended.
            </p>
          </div>

          <div className="">
            <img src={discover4} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Nanny (Part or Full Time)</p>
            <p className="text-sm">
              Contracted for at least three months, responsible for feeding, bathing, and playtime. CPR, First Aid certification, and childcare
              training are mandatory
            </p>
          </div>

          <div className="">
            <img src={discover5} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Specialty Nanny</p>
            <p className="text-sm">
              In addition to childcare experience, Specialty Nannies have varying qualifications that may include early
              childhood education, special needs education, or psychology. 
              
              {/* Their experience is specialized in that they
              may have received it from daycares, teaching, or in child advocacy positions. Some specialty nannies help
              children learn a second language or musical instrument. Specialist nannies generally have diverse work
              experiences as a nanny, in daycares, teaching, or child advocacy. Specialist nannies are passionate about
              their work and are often leaders in the nanny industry. Many specialist nannies work for high profile
              and/or high net worth families and are extremely desirable within the nanny market. */}
            </p>
          </div>

          <div className="">
            <img src={discover2} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Newborn and Infant Care</p>
            <p className="text-sm">

            Newborn and Infant Care Professionals assist parents during the first year, aiding in establishing feeding schedules, routines, and healthy sleep habits to build parental confidence.
            
             {/* They commonly offer overnight care and may provide additional support during the day or around the clock. */}
            </p>
          </div>

          <div className="">
            <img src={discover6} alt="discoverImg" className="w-full h-[250px] rounded-xl object-cover" />
            <p className="font-semibold text-secondary text-xl py-4">Overnight Nannies.</p>
            <p className="text-sm">
              Overnight nannies provide ‘off hours’ support for a specified period of time. Overnight nannies can also
              be on-call when parents only require support in the night time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
