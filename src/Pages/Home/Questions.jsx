import HeadSectionItems from "../../components/fragments/Home/HeadSectionItems";
import QuestionsItems from "../../components/fragments/Home/Questions/QuestionsItems";
import Description from "../../components/elements/Description";

const Questions = () => {
  return (
    <section className="py-[80px]">
      <div className="container px-10">
        <div className="flex flex-col items-center w-full gap-y-10">
          <HeadSectionItems
            title="DO YOU HAVE QUESTIONS?"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, cupiditate?"
          />
          <div className="flex flex-col w-full gap-y-2">
            <QuestionsItems no="1" title="What is Responsive Design?">
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
            </QuestionsItems>
            
            <QuestionsItems no="2" title="What are latest UX Developments?">
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
            </QuestionsItems>
            
            <QuestionsItems no="3" title="What things about Social Media will be discussed?">
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
                <Description>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                  imperdiet, wisi risus purus augue vulputate voluptate neque,
                  curabitur dolor libero sodales vitae elit massa. Lorem ipsum
                  dolor sit amet, maecenas eget vestibulum justo imperdiet.
                </Description>
            </QuestionsItems>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
