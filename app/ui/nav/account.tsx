"use client";

import { useSession } from "next-auth/react";



export default function Account() {
 
    const { data: session } = useSession()

  return (
    <div className='right-4 w-[26rem] h-[12rem]  rounded-[25px] bg-white shadow-custom border border-gray-200 absolute p-4'>
        <h1 className="text-xl font-medium">Account</h1>
       <div className="mt-2 text-black/60">
       <p className="">Username : {session?.user?.email}</p>
       <p className="">Total Number of Votes : 2466</p>
       <p>Correctness Scores : 94 %</p>
       <p>Wrongness Scores : 8%</p>
       </div>
    </div>
  )
}
