import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/fragments/Home/HamburgerMenu";
import Navigasi from "../../components/fragments/Home/Navigasi";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 flexbox-center justify-between w-full py-[10px] px-10 bg-[#000000] md:bg-transparent z-50">
      <div className="min-w-1/5">
        <Link to="#" className="text-[20px] md:text-[30px] text-[#FFFFFF] p-[5px]">
          New Event
        </Link>
      </div>

      <HamburgerMenu />

      <Navigasi />
    </div>
  );
};

export default Header;
