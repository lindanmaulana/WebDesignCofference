import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/fragments/Home/HamburgerMenu";
import Navigasi from "../../components/fragments/Home/Navigasi";
import { useEffect, useState } from "react";
import NavigasiList from "../../components/elements/NavigasiList";

const Header = (props) => {
  const {herobannerRef, overviewRef, speakers, ourProgramRef, registerRef, venueRef, sponsorsRef, contactRef} = props
  const [state, setState] = useState(0);
  
  const handleScroll = () => {
    const pageY = window.pageYOffset;
    setState(pageY)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [state])
  
  return (
    <div className={`${state > 0 ? "md:bg-[#101010] fixed" : "absolute md:bg-transparent"} bg-[#101010] top-0 right-0 flexbox-center justify-between w-full py-[10px] px-10 z-50 `}>
      <div className="min-w-1/5">
        <Link to="#" className="text-[20px] md:text-[30px] text-[#FFFFFF] p-[5px]">New Event </Link>
      </div>
      
      {/* Navigasi mobile */}
      <HamburgerMenu />
      
      {/* Back to top */}
      <ul className={` ${state > 50 ? "block" : "hidden"} fixed px-3 py-2 bg-[#101010] bottom-10 right-10 `}>
        <NavigasiList title="𖤂" linkRef={herobannerRef} />
      </ul>

      <Navigasi herobannerRef={herobannerRef} overviewRef={overviewRef} speakers={speakers} ourProgramRef={ourProgramRef} registerRef={registerRef} venueRef={venueRef} sponsorsRef={sponsorsRef} contactRef={contactRef} />
    </div>
  );
};

export default Header;
