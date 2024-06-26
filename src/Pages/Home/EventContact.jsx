import { forwardRef } from "react"
import Description from "../../components/elements/Description"
import Title from "../../components/elements/Title"

const EventContact = forwardRef((props, ref) => {
  return (
    <section className="py-[100px] bg-[#eee]" ref={ref}>
          <div className="container px-10">
            <div className="flex flex-col lg:flex-row max-w-4xl mx-auto min-h-[550px] gap-y-10">
              <div className="w-full pt-[30px] pr-[20px] lg:w-1/2">
                <Title>New Event</Title>
                <Description>
                  Proin sodales convallis urna eu condimentum. Morbi tincidunt
                  augue eros, vitae pretium mi condimentum eget. Suspendisse eu
                  turpis sed elit pretium congue.
                </Description>

                <Description>
                  Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis.
                </Description>
                <Description>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat. Lorem ipsum dolor.
                </Description>
                <button className="px-[42px] py-[14px] bg-[#F2545F] text-[12px] text-[#FFFFFF] rounded-full mt-[42px]">DOWNLOAD NOW</button>
              </div>
              <div className="w-full  lg:w-1/2 px-[50px] pt-[50px] pb-[120px] flex flex-col justify-between bg-[#FFFFFF] rounded-md">
                <div>
                <h2 className="text-[30px] mt-[20px] mb-[10px] text-[#333333] font-semibold">KEEP IN TOUCH</h2>
                <input type="text" placeholder="Name" className="mb-[16px] w-full focus:border-b  border-slate-400 outline-none px-[12px] py-[6px] " />
                <input type="email" placeholder="Email" className="mb-[16px] w-full focus:border-b  border-slate-400 outline-none px-[12px] py-[6px] " />
                <input type="text" placeholder="Message" className="mb-[16px] w-full focus:border-b  border-slate-400 outline-none px-[12px] py-[6px] " />
                </div>
                <button className="px-[42px] py-[14px] bg-[#222222] text-[12px] text-[#FFFFFF] rounded-full mt-[12px] mb-[16px] max-w-[120px]">SEND</button>
              </div>
            </div>
          </div>
        </section>
  )
})
EventContact.displayName = "EventContact"

export default EventContact
