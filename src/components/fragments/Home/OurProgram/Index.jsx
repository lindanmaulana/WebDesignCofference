import { useSelector } from "react-redux";
import FirstDay from "./FirstDay";
import OurProgramBtn from "./OurProgramBtn"
import SecondDay from "./SecondDay";
import ThirdDay from "./ThirdDay";
import { useEffect, useState } from "react";

const OurProgramContent = () => {
    const [day, setDay] = useState(<FirstDay />);
    const state = useSelector((state) => state.cart.home);
  
    useEffect(() => {
      if (state.ourProgram === 1) {
        setDay(<FirstDay />);
      } else if (state.ourProgram === 2) {
        setDay(<SecondDay />);
      } else if (state.ourProgram === 3) {
        setDay(<ThirdDay />);
      }
    }, [state]);
  
    
    return(
        <div className="max-w-[945px] flex flex-col">
            <OurProgramBtn />
            <div className="flex flex-col w-full">{day}</div>
          </div>
    )
}

export default OurProgramContent