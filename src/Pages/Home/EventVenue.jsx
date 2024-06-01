import Description from "../../components/elements/Description"

const EventVenue = () => {
  return (
    <section className="bg-[url(/src/assets/img/bg/venue.jpg)] bg-center bg-cover">
    <div className="py-[70px]">
      <div className="container px-10">
        <div className="max-w-4xl mx-auto">
          <div className="pr-[50%]">
            <h2 className="text-[30px] text-[#333333] mt-[20px] mb-[10px] font-semibold">
              VENUE
            </h2>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore
              magna aliquam erat volutpat.
            </Description>
            <h3 className="text-[18px] text-[#333333] my-[10px] font-semibold">
              New Event
            </h3>
            <h3 className="text-[18px] text-[#333333] my-[10px] font-semibold">
              120 Market Street, Suite 110
            </h3>
            <h3 className="text-[18px] text-[#333333] my-[10px] font-semibold">
              San Francisco, CA 10110
            </h3>
            <h3 className="text-[18px] text-[#333333] my-[10px] font-semibold">
              Tel: 010-020-0120
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default EventVenue
