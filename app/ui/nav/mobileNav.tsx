"use client"

import Image from "next/image"
import Link from "next/link"
import { useMobile } from "./mobileContext"

export default function MobileNav() {

    const Links = [
        {
            name:"Home",
            icon:"/icons/home.svg",
            link:"/dashboard"
        },
        {
            name:"History",
            icon:"/icons/history.svg",
            link:"/history"
        }
    ]

    const { isOpen , setIsOpen} = useMobile()

  return (
    <>
     {isOpen && 
     (<div id="mobileNav" className="w-full md:hidden h-screen fixed top-0 bg-white/50 
      z-[90] mobile ">
       <div className="w-full flex justify-end p-6">
          <Image  
            id="close"
           onClick={()=>setIsOpen(false)}
          src="/icons/x.svg" 
          className="cursor-pointer" width={24} height={24} alt="close"/>
       </div>
      
         <ul className="flex items-center  flex-col my-6  gap-2 ">
          {Links.map((link,index)=>(
           <Link
            id={link.name.toLowerCase()}
            onClick={() => setIsOpen(false)}
            key={index} 
            href={link.link} className=" w-[50%] flex  gap-2 py-3 ">
              <Image src={link.icon} width={24} height={24} alt="home" />
              <p className="text-lg font-semibold">{link.name}</p>
          </Link>
          ))
  
          }
         </ul>
      </div>)}
    </>
  )
}
