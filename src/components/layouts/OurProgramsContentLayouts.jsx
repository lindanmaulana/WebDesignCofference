import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";

const OurProgramsContentLayouts = (props) => {
    const {src, time, room, role, name, description} = props
  return (
    <div className="flex flex-col lg:flex-row w-full gap-y-6 py-[15px]">
      <div className="w-1/8 max-h-[180px] px-[15px] flex justify-start items-start">
        <img
          src={`/assets/img/person/${src}`}
          alt={name}
          className="w-[125px] h-[125px] rounded-full"
        />
      </div>
      <div className="flex-1 px-[15px]">
        <div className="flex font-medium ">
          <h4 className="flex text-[12px] pr-[12px] text-[#333333] items-center justify-center">
            {" "}
            <IoTimeOutline /> {time}
          </h4>
          <h4 className="flex text-[12px] pr-[12px] text-[#333333] items-center justify-center">
            <IoLocationSharp /> Room{room}
          </h4>
        </div>
        <h2 className="text-[24px] text-[#333333] mt-[16px] mb-[10px]  font-medium ">
          {role}
        </h2>
        <h4 className="text-[12px] text-[#808080] my-[10px] font-medium">
          By {name}
        </h4>
        <p className="text-[14px] text-[#707070] mb-[10px] ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OurProgramsContentLayouts
