import { getSignData, getSimilarData } from '@/app/server/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default async function Similar({currentItemID}:{currentItemID:number}) {

  const data = await getSimilarData({noOfItems:4,currentItemID:currentItemID})


  return (
   
      <div className='w-auto shrink h-[95vh] 2xl:h-[90vh] overflow-hidden  flex-col justify-end pb-2 pt-10 2xl:pt-0 hidden xl:flex 2xl:mt-12'>
        <div className='w-[21rem] flex-[1] 2xl:w-[400px] h-full border border-black/20 rounded-[25px] p-2 text-black overflow-hidden'>
        <h3 className='font-medium text-xl p-4'>Similar</h3>
        <div className='w-full h-full mt-4 flex flex-col items-center px-4 gap-4'>
          <SimilarCard Data={data}/>
        </div>
        </div>
    </div>
  )
}


const SimilarCard = ( { Data}:{ Data:any}) => {


  return(
    <>
    {Data && Data.map((item:any)=>(
      <Link key={item.id} href={`${item.id}`} className='w-full h-[13rem] border border-gray-300/70 rounded-[35px]   overflow-hidden cursor-pointer group/g'>
      <div className="w-full h-full relative">
      <div className='absolute z-20 w-full h-full p-6 bg-black/40 group-hover/g:bg-black/60 flex flex-col justify-end'>
       <h3 className='text-xl font-medium text-white'>{item.attributes.video_name}</h3>
       </div>
       <video className='w-full h-full object-cover' >
          <source src={item.attributes.video_url} type="video/mp4"/>
        </video>
      </div>
     </Link>
    ))}
    </>
  )
}