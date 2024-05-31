const HamburgerMenu = () => {
  return (
    <button className="flex flex-col md:hidden gap-y-1">
      <span className="block w-6 h-[2px] bg-[#FFFFFF]"></span>
      <span className="block w-6 h-[2px] bg-[#FFFFFF]"></span>
      <span className="block w-6 h-[2px] bg-[#FFFFFF]"></span>
    </button>
  );
};

export default HamburgerMenu;
