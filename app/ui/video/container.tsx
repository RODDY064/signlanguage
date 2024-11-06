"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Card from "./card";
import Pagination from "../pagination/pagination";
import { getSignDataNotContain, Video } from "@/app/server/data";
import { usePagination } from "../pagination/paginationContext";
import ErrorContainer from "../error/errorContainer";
import LoadingContainer from "../loading/loading";


export default function Container() {
  const [data, setData] = useState<Video[]>([]);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const { pagination , setPagination } = usePagination();
  const [state, setState] = useState({
    success: false,
    error: false,
    loading: true,
  });

  const [filteredData, setFilteredData] = useState<Video[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  // Function to fetch data
  async function fetchData() {
    try {
      const apiDataReq = await fetch("api/getSignDataNotContain",{
        method: "GET",
        cache:"default",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const apiData = await apiDataReq.json();


      if (apiData) {
        setData(apiData.data);
        setFilteredData(apiData.data);
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
    fetchData();
  }, []);


  

  function formatVideoId(videoId: string): string {
    if(!videoId){
      return ""
    }
    const formatted = videoId
      .toLowerCase()
      .replace(/mvi/, 'Mvi') 
      .replace('_', ' '); 
    
      return `${formatted}.mp4`;
  }
  useEffect(() => {
    // Process the data
    const newData = data.map((video) => {
      return {
        ...video,
        url: `https://videos.vskuul.com/storage/${formatVideoId(video.video_url)}`,
      };
    });

    // Filter the data based on the query
    const filtered = query
      ? newData.filter((video) =>
          video.video_name.toLowerCase().includes(query.toLowerCase())
        )
      : newData;

    setFilteredData(filtered);

    // Paginate the filtered data
    const startIndex = (pagination.current - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    const paginated = filtered.slice(startIndex, endIndex);

    setPaginatedData(paginated);

    // console.log(paginated, 'paginatedData');
  }, [query, data, pagination.current, pagination.pageSize]);


  return (
    <div className="w-full h-full mt-6 px-2 md:px-0">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <h1 className="px-2 md:px-0 pb-2 text-xl font-bold">Videos</h1>
        <div className="w-full  flex items-center justify-center md:items-start md:justify-start py-1 md:py-0
        md:w-auto"><Pagination/></div>
        <h1 className="opacity-0 hidden md:flex">1</h1>
      </div>
      <div className="w-full h-full overflow-hidden overflow-y-scroll pt-4 pb-[12rem] md:pb-[8rem] 2xl:pb-auto border-t border-black/20 px-4 md:px-0 lg:pl-6 xl:pl-4 py-4 gap-6 2xl:gap-6 md:gap-4 flex place-content-start md:flex-wrap flex-col items-center md:items-start md:flex-row ">
         {state.loading && <LoadingContainer/>}
        {state.error && <ErrorContainer/>}
        {!state.loading && !state.error && (
          <>
            {paginatedData.map((video: Video) => (
              <Card key={video.id} video={video} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
