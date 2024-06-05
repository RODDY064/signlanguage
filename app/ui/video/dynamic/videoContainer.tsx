"use client"

import Image from "next/image"
import Vote from "../../vote/vote"
import { useEdit } from "../../edit/editContext"

export default function VideoContainer() {

  const { setEdit } = useEdit()

  return (
    <div className="w-full flex-[2] md:w-[45rem] 2xl:w-[1280px] max-sm:mb-10">
      <div className="w-full  h-[20rem] p-6  2xl:h-[740px]  md:h-[26rem] rounded-[35px] border border-black/10 relative md:mt-10 xl:mt-0 overflow-hidden">
        <Image src="/images/team.jpg" fill alt="team" className="object-cover"/>
      </div>
      <div className='my-4 md:px-2'>
         <div className="flex gap-2 justify-between">
           <div>
           <h1 className="text-xl font-bold ">To ensure that the Similar component shrinks more than the VideoContainer component when resizing, you can adjust.</h1>
           </div>
           <div onClick={()=>setEdit(true)} className="px-8 hidden  md:px-10 h-12 cursor-pointer md:flex items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]">
            <p>Edit</p>
            <Image src="/icons/edit.svg" width={20} height={20} alt="edit" className="group-hover/m:hidden"/>
            <Image src="/icons/edit_b.svg" width={20} height={20} alt="edit" className="hidden group-hover/m:flex"/>
           </div>
         </div>
         <p className="text-black/60 font-medium  my-2">A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"), and contain records (rows) with data.</p>
        </div>
        <div className="w-full flex justify-end md:hidden my-4">
        <div onClick={()=>setEdit(true)} className="px-8 flex   md:px-10 h-12 cursor-pointer md:hidden items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]">
            <p>Edit</p>
            <Image src="/icons/edit.svg" width={20} height={20} alt="edit" className="group-hover/m:hidden"/>
            <Image src="/icons/edit_b.svg" width={20} height={20} alt="edit" className="hidden group-hover/m:flex"/>
           </div>
        </div>
        <Vote/>
    </div>
  )
}
