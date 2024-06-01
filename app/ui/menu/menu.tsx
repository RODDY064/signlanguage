"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../../utils/cn";
import { signOut } from 'next-auth/react';

interface MenuItem { 
    name: string;
    icon: string;
    icon_active: string;
    link: string;

}

export default function Menu() {
    const pathName = usePathname();

    const menuItems:MenuItem[] = [
        {
            name:"Home",
            icon:"home.svg" ,
            icon_active:"home_b.svg",
            link:"/dashboard"

        },
        {
            name:"History",
            icon:"history.svg",
            icon_active:"history_b.svg",
            link:"/history"

        },
        {
            name:"Settings",
            icon:"setting.svg",
            icon_active:"setting_b.svg",
            link:"/settings"

        }
    ]



  return (
    <div className="md:w-[12rem] lg:w-[16rem]  h-full fixed  hidden md:flex flex-col gap-2 p-2">
      <div className="w-full flex-none h-[10rem] bg-sky-600 rounded-[10px]"></div>
      <div className="flex flex-col gap-2">
        {menuItems.map((item,index)=>(
          <Link href={item.link} key={index} className={cn("w-full h-14 group/x rounded-[10px] hover:bg-sky-100 bg-gray-100  flex items-center cursor-pointer px-4 gap-2 transition-all duration-10",{
            "bg-sky-100": pathName === item.link
          })}>
          <div>
          {pathName === item.link ?
          <Image src={`/icons/${item.icon_active}`} width={24} height={24} alt={item.name} className="group-hover/x:hidden"/> 
          : <Image src={`/icons/${item.icon}`}  width={24} height={24} alt={item.name} className="group-hover/x:hidden"/>
          }
          <Image src={`/icons/${item.icon_active}`} width={24} height={24} alt={item.name} className="group-hover/x:block hidden"/> 
          </div>
          <p className={cn("text-black group-hover/x:text-blue-700",{
            "text-blue-700": pathName === item.link
          })}>{item.name}</p>
         </Link>
        ))
        }
      </div>
      <div className="w-full h-full bg-gray-100 rounded-[10px]"></div>
      <div onClick={()=>signOut({callbackUrl:"http://localhost:3000/"})}  className="w-full h-14 hover:bg-sky-100 group flex-none rounded-[10px] bg-gray-100 cursor-pointer flex gap-2 items-center px-4">
        <Image src="/icons/logout.svg" width={24} height={24} alt="logout" className="group-hover:hidden"/>
        <Image src="/icons/logout_b.svg" width={24} height={24} alt="logout" className="group-hover:flex hidden"/>
        <p className="text-black group-hover:text-blue-700">Logout</p>
      </div>
    </div>
  )
}
