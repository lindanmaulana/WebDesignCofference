import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionsState } from "../../../../redux/slices/cartSlices";

const QuestionsItems = (props) => {
    const {title, children, no} = props
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart.home.questions);
    
    const [quest, setQuest] = useState(true);
    const handleQuestions = (params) => {
      setQuest(!quest)
      
      dispatch(
        questionsState({
          state: quest,
          id: params,
        })
      );
    };
    
  return (
    <div className="self-center max-w-4xl">
      <div className="w-full bg-[#F0F0F0] pt-[8px] pb-[6px] px-[15px] relative">
        <h2 className="text-[18px] px-[15px] py-[10px] text-[#505050] ">
          {title}
        </h2>
        <button
          onClick={() => handleQuestions(no)}
          className="absolute top-0 right-0 w-full h-full px-10 text-end"
        >
          {state.id === no && state.state ? "-" : "+"}
        </button>
      </div>
      <div
        className={` overflow-hidden pr-[15px] pl-[32px] ${
          state.id === no && state.state
            ? "h-[160px] pt-[22px]  pb-[22px]"
            : "h-0"
        } transition-global duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default QuestionsItems;
