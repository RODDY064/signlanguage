"use client"

import Image from "next/image"
import Vote from "../../vote/vote"
import { useEdit } from "../../edit/editContext"

export default function VideoContainer({videoData}:{videoData:any}) {

  const { setEdit } = useEdit()

  return (
    <div className="w-full flex-[2] md:w-[45rem] 2xl:w-[1280px] max-sm:mb-10">
      <div className="w-full  h-[20rem]   md:h-[26rem] rounded-[20px] border border-black/10 relative md:mt-10 xl:mt-0 overflow-hidden">
        <video controls className="w-full h-full">
          <source src={videoData.attributes.video_url} type="video/mp4"/>
        </video>
      </div>
      <div className='my-4 md:px-2'>
         <div className="flex gap-2 justify-between">
           <div>
           <h1 className="text-2xl font-bold px-4 "><span className="text-xl text-black/50 font-medium">Description : </span> {videoData.attributes.video_name}</h1>
           </div>
           <div onClick={()=>setEdit(true)} className="px-8 hidden  md:px-10 h-12 cursor-pointer md:flex items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]">
            <p>Edit</p>
            <Image src="/icons/edit.svg" width={20} height={20} alt="edit" className="group-hover/m:hidden"/>
            <Image src="/icons/edit_b.svg" width={20} height={20} alt="edit" className="hidden group-hover/m:flex"/>
           </div>
         </div>
        </div>
        <div className="w-full flex justify-end md:hidden my-4">
        <div onClick={()=>setEdit(true)} className="px-8 flex   md:px-10 h-12 cursor-pointer md:hidden items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]">
            <p>Edit</p>
            <Image src="/icons/edit.svg" width={20} height={20} alt="edit" className="group-hover/m:hidden"/>
            <Image src="/icons/edit_b.svg" width={20} height={20} alt="edit" className="hidden group-hover/m:flex"/>
           </div>
        </div>
        <Vote id={videoData.id}/>
    </div>
  )
}
