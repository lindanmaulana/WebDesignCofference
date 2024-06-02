import { createContext, useRef, useContext } from "react";

const gulirContext = createContext();


export const RefProvider = (props) => {
    const {children} = props

    const sectionsRef = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
      };

    return (
        <gulirContext.Provider value={sectionsRef}>
        {children}
        </gulirContext.Provider>
    )
}

export const useRefContext = () => {
    return useContext(gulirContext)
}