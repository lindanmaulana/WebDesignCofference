import { useDispatch } from "react-redux";
import { switchDay } from "../../redux/slices/cartSlices";

const BtnOurProgram = (props) => {
    const {params, children} = props
    const dispatch = useDispatch();

    const handleDay = (params) => {
      if (params === "firstday") {
        dispatch(switchDay(1));
      } else if (params === "secondday") {
        dispatch(switchDay(2));
      } else if (params === "thirdday") {
        dispatch(switchDay(3));
      }
    };

  return (
    <button
    onClick={() => {handleDay(params)}}
    className="text-[14px] font-semibold active:border-b focus:border-b-[1px] focus:border-black/40 focus:text-[#F2545F] py-[10px] px-[15px] text-[#000000] "
  >
    {children}
  </button>
  )
}

export default BtnOurProgram
