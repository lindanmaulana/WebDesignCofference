const HeadSectionItems = (props) => {
  const { title, description } = props;

  return (
    <div className="w-full text-center">
      <h2 className="text-[30px] text-[#333333] mt-[20px] mb-[10px] font-semibold">
        {title}
      </h2>
      <p className="text-[14px] text-[#707070] mb-[10px]">{description}</p>
    </div>
  );
};

export default HeadSectionItems;
