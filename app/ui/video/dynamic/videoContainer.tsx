"use client"

import Image from "next/image"
import Vote from "../../vote/vote"

export default function VideoContainer() {
  return (
    <div className="w-full flex-[2] md:w-[45rem] 2xl:w-[1280px]">
      <div className="w-full  h-[20rem] p-6  2xl:h-[740px]  md:h-[26rem] rounded-[35px] border border-black/10 relative md:mt-10 xl:mt-0 overflow-hidden">
        <Image src="/images/team.jpg" fill alt="team" className="object-cover"/>
      </div>
      <div className='my-4 md:px-2'>
         <div className="flex gap-2 justify-between">
           <div>
           <h1 className="text-xl font-bold ">To ensure that the Similar component shrinks more than the VideoContainer component when resizing, you can adjust.</h1>
           </div>
           <div className="px-8 md:px-10 h-12 cursor-pointer flex items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]">
            <p>Edit</p>
            <Image src="/icons/edit.svg" width={20} height={20} alt="edit" className="group-hover/m:hidden"/>
            <Image src="/icons/edit_b.svg" width={20} height={20} alt="edit" className="hidden group-hover/m:flex"/>
           </div>
         </div>
         <p className="text-black/60 font-medium  my-2">A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"), and contain records (rows) with data.</p>
        </div>
        <Vote/>
    </div>
  )
}
