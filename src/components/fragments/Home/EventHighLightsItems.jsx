const EventHighLightsItems = (props) => {
    const {icons, title, description} = props
  return (
    <div className="px-[15px] w-1/3 flex flex-col justify-center items-center text-center">
      {icons}
      <h2 className="text-[24px] text-[#FFFFFF] mt-[20px] mb-[10px] pb-[12px] ">
        {title}
      </h2>
      <p className="text-[14px] text-[#707070] mb-[10px] ">
        {description}
      </p>
    </div>
  );
};

export default EventHighLightsItems;
