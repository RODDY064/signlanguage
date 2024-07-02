"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState , useEffect, useRef  } from "react"
import Card from "./card"

export default function Container({videoData}:{videoData:any}) {
  // handle url query to filter the videoData
  const  searchParams = useSearchParams()
  const  query  =  searchParams.get('query');

  const [filteredData, setFilteredData] = useState(videoData);
  const filteredDataRef = useRef(filteredData); // create a reference to filteredData

  useEffect(() => {
    // filter logic: filter by a specific category from the query
    if (query) {
      setFilteredData(videoData.filter((video: any) => video.attributes.video_name.toLowerCase().includes(query ? query.toLowerCase() : '')));
    } else {
      setFilteredData(videoData);
    }
  }, [query, videoData]);

  // useEffect(()=>{
  //   console.log(filteredDataRef.current) // use the reference here
  // },[filteredDataRef.current]) 


   

  return (
    <div className="w-full h-full mt-6 px-2 md:px-0">
        <h1 className="px-2 md:px-0 pb-2 text-xl font-bold">Videos</h1>
        <div className="w-full h-full overflow-hidden overflow-y-scroll pt-4 pb-[8rem] 2xl:pb-auto border-t border-black/20 px-4 md:px-0 lg:pl-6 xl:pl-4  py-4 gap-6 2xl:gap-6 md:gap-4 flex place-content-start  md:flex-wrap flex-col items-start md:flex-row ">
        {
            filteredData.map((video:any) => (
                <Card key={video.id} video={video}/>
            ))     }
        </div>
    </div>
  )
}
