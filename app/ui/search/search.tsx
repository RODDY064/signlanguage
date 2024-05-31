"use client"
import { cn } from "@/utils/cn"
import Image from "next/image"


export default function Search({className}:{className?:string}) {
  return (
    <div className={cn("w-full px-4 md:px-0 full flex flex-col items-center",className)}>
        <div className="w-full md:w-[25rem] lg:w-[30rem] h-12 bg-white border border-black/20 flex rounded-[25px]">
          <input type="text" placeholder="Search for videos" className="w-[80%] h-full focus:outline-none bg-transparent p-4"/>
          <div className="w-[20%] h-full flex justify-end items-center  p-1">
            <div className="size-10 rounded-full bg-sky-500 flex items-center justify-center cursor-pointer">
              <Image src="/icons/search.svg" width={24} height={24} alt="search"/>
            </div>
          </div>
        </div>
    </div>
  )
}
