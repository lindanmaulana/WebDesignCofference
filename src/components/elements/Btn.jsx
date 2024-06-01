const Btn = ({children}) => {
  return (
    <button className="bg-[#F2545F] self-end py-[6px] px-[12px] rounded-[100px] mt-[12px] mb-[16px] tracking-[2px] min-w-[198px] h-[50px] text-[14px] text-[#FFFFFF]">
      {children}
    </button>
  );
};

export default Btn;
