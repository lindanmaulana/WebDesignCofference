import OurProgramContent from "../../components/fragments/Home/OurProgram/Index";

const OurProgram = () => {

  return (
    <section className="py-[100px]">
      <div className="container px-10">
        <div className="flex flex-col w-full px-[15px]">
            
          <div className="min-h-[119px]">
            <h2 className="text-[30px] text-[#333333] mt-[20px] mb-[10px] font-semibold ">
              OUR PROGRAMS
            </h2>
            <p className="text-[14px] text-[#707070] mb-[10px] ">
              Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
              at, vehicula finibus massa. Sed tincidunt metus sed eleifend
              suscipit.
            </p>
          </div>
          
          <OurProgramContent />
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
