"use client";

import { createContext ,useContext,useEffect,useState } from "react";


const mobileContext = createContext<{
 isOpen:boolean,
 setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}| null>(null)


function MobileContextProvider({children}:{ children:React.ReactNode}) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <mobileContext.Provider value={{ isOpen, setIsOpen}}>
      {children}
    </mobileContext.Provider>
  )
}

export default MobileContextProvider;

export function useMobile (){
  const context = useContext(mobileContext)
  if(!context){
    throw new Error('Mobile context must be used in mobile context provider')
  }
  return context;
}