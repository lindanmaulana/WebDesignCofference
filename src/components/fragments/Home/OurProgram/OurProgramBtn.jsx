import BtnOurProgram from "../../../elements/BtnOurProgram";
const OurProgramBtn = () => {
  return (
    <div className="mb-[20px] flex gap-x-[2px] border-b-2">
      <BtnOurProgram params="firstday">FIRST DAY</BtnOurProgram>

      <BtnOurProgram params="secondday">SECOND DAY</BtnOurProgram>

      <BtnOurProgram params="thirdday">THIRD DAY</BtnOurProgram>
    </div>
  );
};

export default OurProgramBtn;
