import React from 'react'

export default function History() {
  return (
    <div className='w-full h-screen overflow-hidden    md:pl-[13rem] lg:pl-[17rem] md:pr-6 pt-24 md:pt-8 items-center  flex flex-col '>
      <div className='w-[95%] h-full'>
      <h1 className='text-2xl font-bold'>History</h1>
      <div className='w-full border-t border-black/40 pt-6 mt-4 flex flex-wrap flex-col items-center md:flex-row md:items-start'>
      <HistoryCard/>
      </div>
      </div>
    </div>)
}


const HistoryCard = ()=>{
  return(
    <div className='w-[20rem] h-[17rem] border border-black/30 cursor-pointer rounded-[25px] p-2'>
      <div className='w-full h-[10.5rem] rounded-2xl border border-black/10 '></div>
      <div className='py-2'>
        <p className='text-xl px-2 truncate'><span className='text-sm text-black/60 '>Description : </span>Health</p>
        <p className='text-lg px-2 text-green-400/80'><span className='text-sm text-black/60 '>Your vote : </span> Correct</p>
      </div>
    </div>
  )
}