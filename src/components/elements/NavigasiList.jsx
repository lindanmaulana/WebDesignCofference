const NavigasiList = (props) => {
    const {href, title} = props
  return (
    <li className="p-[10px] text-[12px]">
      <a href={href} className="text-[#DDDDDD] hover:text-[#66CCFF]">
        {title}
      </a>
    </li>
  );
};

export default NavigasiList;
