import { forwardRef } from "react"
import HeadSectionItems from "../../components/fragments/Home/HeadSectionItems"

const OurSponsor = forwardRef((props, ref) => {
  return (
    <section className="py-[100px]" ref={ref}>
    <div className="container px-10">
      <HeadSectionItems title="OUR SPONSORS" description="Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet." />
      <div className="flex-wrap w-full flexbox-center">
        <div className="w-[262px] h-[176px] px-[15px] mt-[18px] flexbox-center">
          <h2 className="text-[#F2545F] font-medium">SPONSOR ONE</h2>
        </div>
        <div className="w-[262px] h-[176px] px-[15px] mt-[18px] flexbox-center">
          <h2 className="text-[#F2545F] font-medium">SPONSOR ONE</h2>
        </div>
        <div className="w-[262px] h-[176px] px-[15px] mt-[18px] flexbox-center">
          <h2 className="text-[#F2545F] font-medium">SPONSOR ONE</h2>
        </div>
        <div className="w-[262px] h-[176px] px-[15px] mt-[18px] flexbox-center">
          <h2 className="text-[#F2545F] font-medium">SPONSOR ONE</h2>
        </div>
      </div>
    </div>
  </section>
  )
})

OurSponsor.displayName = "OurSponsor"

export default OurSponsor
