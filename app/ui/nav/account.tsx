"use client";

import { getSession, useSession } from "next-auth/react";
import { createVideos } from "../form/action";
import { useEffect, useState } from "react";



export default function Account() {
   const [session,setSession] = useState<any>(null)
   const [loading, setLoading] = useState(false)

   const fetchSession = async () => {
    const sessionData = await getSession(); 
    setSession(sessionData)
    if(sessionData){
      setLoading(true)
    }
  };


   useEffect(()=>{
    fetchSession()
   },[])

  return (
    <div 
    className='right-4 w-[26rem] h-[12rem]  rounded-[15px] bg-white shadow-custom border border-gray-200 absolute p-4 z-[70]'>
        <h1
         className="text-xl font-medium cursor-pointer">Account</h1>
       {!loading ? 
       (<>
        <div className="w-full h-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
       </>):
       (<>
       <div className="mt-2 text-black/60">
       <p className="">Username : {session?.user?.name}</p>
       <p className="">Email : {session?.user?.email}</p>
      <p className="">Total Number of Votes : {session?.user?.total_votes ? session.user.total_votes : 0}</p>
       <p>Correctness Scores : {session?.user?.correctness && session?.user.total_votes ? calculatePercentage(session.user.correctness,session.user.total_votes) : 0}%</p>
       <p>Wrongness Scores : {session?.user?.correctness && session?.user.total_votes ? calculatePercentage(session.user.wrongness,session.user.total_votes) : 0}%</p>
       </div>
       </>)
       }
    </div>
  )
}


// function to calculate the percentage of the correctness and wrongness scores
  function calculatePercentage(score:number, total:number){
    return ((score/total)*100).toFixed(0)
  }