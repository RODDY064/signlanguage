"use client";

import { getSignData, Video } from "@/app/server/data"
import ErrorContainer from "@/app/ui/error/errorContainer";
import LoadingContainer from "@/app/ui/loading/loading";
import Pagination from "@/app/ui/pagination/pagination";
import { usePagination } from "@/app/ui/pagination/paginationContext";
import { auth } from "@/auth"
import Link from "next/link"
import { useEffect, useState } from "react";
import { formatVideoId } from '@/utils/videoUrl';
import React from "react";


export default  function History() {
   const [data,setData] = useState<Video[]>([])
   const [firstRun,setFirstRun] = useState(true)
   const {pagination,setPage,setPagination} = usePagination()
   const [state, setState] = useState({
    success: false,
    error: false,
    loading: true,
   })


   async function fetchData() {
    try {
      const apiData = await getSignData({
        pagination:pagination.current,
        typeReturn: "contain",
      });
      if (apiData) {
        setData(apiData.data);
        setState({
          success: true,
          error: false,
          loading: false,
        });
        setPagination({
          ...pagination,
          total: apiData.count

        })
      } else {
        setState({
          success:false,
          loading:false,
          error:true
        })
        throw new Error("No data returned from the API");

      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({
        success:false,
        loading:false,
        error:true
      })
    }
  }
 


  useEffect(() => {
    if(firstRun){
      setPage(1)
      setFirstRun(false)
    }
    setState({
      loading:true,
      success:false,
      error:false
    })
    fetchData();
  }, [pagination.current]);
   

  return (
    <div className='w-full h-screen overflow-hidden    md:pl-[13rem] lg:pl-[17rem] md:pr-6 pt-24 md:pt-8 items-center  flex flex-col '>
      <div className='w-[95%] h-full'>
      <div className='w-full min-h-12 md:items-center gap-2  flex flex-col md:flex-row md:justify-between'>
        <p className='text-2xl font-bold'>History</p>
        <div className="w-full  flex items-center justify-center md:items-start md:justify-start py-1 md:py-0
        md:w-auto"><Pagination/></div>
        <p className="opacity-0 hidden md:flex">1</p>
      </div>
      <div className='w-full h-full overflow-y-scroll pb-20 border-t border-black/40 pt-6 mt-4 flex md:flex-wrap flex-col items-center md:flex-row md:items-start gap-4 place-content-start'>
         {state.loading && <LoadingContainer/>}
         {state.error && <ErrorContainer/>}
        {!state.loading && !state.error && 
        (<>
          {data?.map((item)=>(
            <HistoryCard key={item.id} data={item} />
           ))}
          </>
        )}
      </div>
      </div>
    </div>)
}


const HistoryCard = ({ data  }:{ data:Video})=>{
  
  const userVote = data?.votes[0]?.voteType

  return(
    <div className='w-[90%] md:w-[20rem] h-[17rem] border border-black/30 cursor-pointer rounded-[25px] p-2'>
      <div className='w-full h-[10.5rem] rounded-2xl border border-black/10 overflow-hidden'>
      <video  muted className='w-full h-full'>
            <source src={`https://videos.vskuul.com/storage/${formatVideoId(data.video_url)}`} type="video/mp4"/>
        </video>
      </div>
      <div className='py-2'>
        <p className='text-lg px-2 truncate'><span className='text-sm text-black/60 '>Description : </span>{data.new_video_name??data.video_name}</p>
       <div className="flex items-center justify-between">
       <p className={`text-md px-2 ${userVote === 'correct' ? 'text-green-600':'text-red-600'}`}><span className='text-sm text-black/60 '>Your vote : </span> {userVote || 'Not voted'}</p> 
        <Link href={`/video/${data.id}?id=${data.id}`} className="px-2 text-blue-600">edit</Link>
        </div>      
      </div>
    </div>
  )
}