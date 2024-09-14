"use client";

import { createContext, useContext, useState } from "react";

export interface RecorderProps {
    video:any,
    isActive:boolean

}


const editContext = createContext<{
    edit:boolean,
    setEdit:React.Dispatch<React.SetStateAction<boolean>>
    recorder:RecorderProps,
    setRecorder:React.Dispatch<React.SetStateAction<RecorderProps>>
}|null>(null);


export default function EditContextProvider({children}:{children:React.ReactNode}) {
    const [edit,setEdit] = useState<boolean>(false)
    const [recorder,setRecorder] = useState<RecorderProps>({
      video:"",
      isActive:false
    })


  return (
    <editContext.Provider value={{ edit, setEdit , recorder, setRecorder}}>
       {children}
    </editContext.Provider>
  )
}


export function useEdit(){
    const context = useContext(editContext)
    if (!context) {
        throw new Error("useProduct must be used within a ProductContextProvider");
      } else {
        return context;
      }
}