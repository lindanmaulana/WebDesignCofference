import { Link } from "react-router-dom";

const FooterList = ({ children }) => {
  return (
    <Link className="w-[50px] h-[50px] flex hover:bg-[#F2545F] justify-center items-center group rounded-full transition-global">
      {children}
    </Link>
  );
};

export default FooterList;
