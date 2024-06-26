import { IoIosPeople, IoIosTimer, IoIosMic } from "react-icons/io";
import EventHighLightsItems from "../../components/fragments/Home/EventHighLightsItems";
import { forwardRef } from "react";

const EventHighlights = forwardRef((props, ref) => {
  return (
    <section className="py-[100px] bg-[#222222]" ref={ref}>
      <div className="container px-10">
        <div className="flex flex-col w-full lg:flex-row">
          <EventHighLightsItems
            icons={<IoIosPeople className="w-16 h-16 text-[#F2545F]" />}
            title="650 Participants"
            description="Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
              at, vehicula finibus massa. Sed tincidunt metus sed eleifend
              suscipit."
          />
          <EventHighLightsItems
            icons={<IoIosTimer className="w-16 h-16 text-[#F2545F]" />}
            title="24 Programs"
            description="Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
              at, vehicula finibus massa. Sed tincidunt metus sed eleifend
              suscipit."
          />
          <EventHighLightsItems
            icons={<IoIosMic className="w-16 h-16 text-[#F2545F]" />}
            title="11 Speakers"
            description="Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
              at, vehicula finibus massa. Sed tincidunt metus sed eleifend
              suscipit."
          />
        </div>
      </div>
    </section>
  );
});

EventHighlights.displayName = "EventHighLights"

export default EventHighlights;
