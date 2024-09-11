"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Card from "./card";
import Pagination from "../pagination/pagination";
import { getSignData , Video } from "@/app/server/data";
import { usePagination } from "../pagination/paginationContext";
import ErrorContainer from "../error/errorContainer";
import LoadingContainer from "../loading/loading";


export default function Container() {
  const [data, setData] = useState<Video[]>([]);
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
      const apiData = await getSignData({
        pagination: pagination.current,
        typeReturn: "not contain",
      });
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
    setState({
      loading:true,
      success:false,
      error:false
    })
    fetchData();
  }, [pagination.current]);

  useEffect(() => {
    if (query) {
      setFilteredData(
        data.filter((video) =>
          video.video_name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [query, data]);

  return (
    <div className="w-full h-full mt-6 px-2 md:px-0">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <h1 className="px-2 md:px-0 pb-2 text-xl font-bold">Videos</h1>
        <Pagination />
        <h1 className="opacity-0 hidden md:flex">1</h1>
      </div>
      <div className="w-full h-full overflow-hidden overflow-y-scroll pt-4 pb-[12rem] md:pb-[8rem] 2xl:pb-auto border-t border-black/20 px-4 md:px-0 lg:pl-6 xl:pl-4 py-4 gap-6 2xl:gap-6 md:gap-4 flex place-content-start md:flex-wrap flex-col items-center md:items-start md:flex-row ">
         {state.loading && <LoadingContainer/>}
        {state.error && <ErrorContainer/>}
        {!state.loading && !state.error && (
          <>
            {filteredData.map((video: Video) => (
              <Card key={video.id} video={video} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
