"use client";

import { getSession, useSession } from "next-auth/react";
import { createVideos } from "../form/action";
import { useEffect, useState } from "react";
import { get } from "http";
import { getUserStats } from "@/app/server/data";

interface StatsProps {
 totalVotes:number,
 correctPercentage:string | number,
  wrongPercentage:string | number
}


export default function Account() {
   const [session,setSession] = useState<any>(null)
   const [stats,setStats] = useState<StatsProps| null>(null)
   const [loading, setLoading] = useState(false)

   const fetchSession = async () => {
    const sessionData = await getSession(); 
    const statRes = await getUserStats()
    setSession(sessionData)
    setStats(statRes)
    if(sessionData && statRes){
      setLoading(true)
    }
  };


   useEffect(()=>{
    fetchSession()
   },[])

  return (
    <div 
    className='right-1 w-[20rem]  md:right-4 md:w-[26rem] h-[12rem]  rounded-[15px]  bg-white shadow-custom border border-gray-200 absolute p-4 px-6 z-[70]'>
        <h1
         onClick={()=> createVideos()}
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
      <p className="">Total Number of Votes : {stats?.totalVotes ?? 0}</p>
       <p>Correctness Scores : {stats?.correctPercentage?? 0}%</p>
       <p>Wrongness Scores : {stats?.wrongPercentage?? 0}%</p>
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