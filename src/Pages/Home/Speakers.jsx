import HeadSectionItems from "../../components/fragments/Home/HeadSectionItems";
import SpeakersPerson from "../../components/fragments/Home/SpeakersPerson";

const Speakers = () => {
  return (
    <section className="py-[100px]">
      <div className="container px-10">
        <div className="flex flex-col items-center justify-center w-full gap-y-[20px] whitespace-nowrap">
          <HeadSectionItems
            title="CREATIVE SPEAKERS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, ea!"
          />
          <div className="flex items-center justify-center w-full overflow-x-auto snap-mandatory snap-x custom-scrollbar-x">
            <SpeakersPerson
              src="lindan.jpg"
              name="Lindan Maulana"
              role="Frontend Dev"
            />
            <SpeakersPerson
              src="reyhan.jpg"
              name="Reyhan Setyawan"
              role="Database Management"
            />
            <SpeakersPerson
              src="adit.jpg"
              name="Aditya Ramadhan"
              role="UI/UX Designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
