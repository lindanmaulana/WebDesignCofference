
const NavigasiList = (props) => {
    const {title, linkRef} = props
    const handleScrollToSection = (ref) => {
      if(ref.current) {
        ref.current.scrollIntoView({behavior: 'smooth'})
      }
    }

  return (
    <li className="p-[10px] text-[12px]">
      <button onClick={() => handleScrollToSection(linkRef)} className="text-[#DDDDDD] hover:text-[#66CCFF] focus:text-[#66CCFF] active:text-[#66CCFF]">
        {title}
      </button>
    </li>
  );
};

export default NavigasiList;
