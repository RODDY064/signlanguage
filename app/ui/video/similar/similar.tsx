import Image from 'next/image'
import React from 'react'

export default function Similar() {
  return (
   
      <div className='w-auto shrink h-[95vh] 2xl:h-[90vh]   flex-col justify-end pb-2 pt-10 2xl:pt-0 hidden xl:flex 2xl:mt-12'>
        <div className='w-[21rem] flex-[1] 2xl:w-[400px] h-full border border-black/20 rounded-[25px] p-2 text-black'>
        <h3 className='font-medium text-xl p-4'>Similar</h3>
        <div className='w-full h-full mt-4 flex flex-col items-center px-4 gap-4'>
          <SimilarCard/>
          <SimilarCard/>
          <SimilarCard/>
          <SimilarCard/>
        </div>
        </div>
    </div>
  )
}


const SimilarCard = () => {
  return(
    <div className='w-full h-[13rem] border border-gray-300/70 rounded-[35px]   overflow-hidden cursor-pointer group/g'>
     <div className="w-full h-full relative">
      <Image src="/images/health.jpg" fill className='object-cover' alt='health'/>
      <div className='absolute w-full h-full p-6 bg-black/40 group-hover/g:bg-black/60 flex flex-col justify-end'>
      <h3 className='text-xl font-medium text-white'>Hello</h3>
      </div>
     </div>
    </div>
  )
}