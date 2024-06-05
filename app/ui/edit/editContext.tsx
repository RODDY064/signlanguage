"use client";

import { createContext, useContext, useState } from "react";

const editContext = createContext<{
    edit:boolean,
    setEdit:React.Dispatch<React.SetStateAction<boolean>>
}|null>(null);


export default function EditContextProvider({children}:{children:React.ReactNode}) {
    const [edit,setEdit] = useState<boolean>(false)


  return (
    <editContext.Provider value={{ edit, setEdit}}>
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