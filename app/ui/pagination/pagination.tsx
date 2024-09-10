"use client"

import Image from "next/image"
import { usePagination } from "./paginationContext"
import { useState , useEffect } from "react"
import { cn } from "@/utils/cn"

export default function Pagination() {
  const { pagination,setPage } = usePagination()
  const { current , total , pageSize } = pagination
  const [pages, setPages] = useState<number[]>([]); 
  const [totalSize,setTotalSize] = useState(3)


  useEffect(() => {
    // Calculate the total number of pages
    const totalPages = Math.ceil(total / pageSize);
    setTotalSize(totalPages)
    let startPage = Math.max(current - 1, 1);
    let endPage = Math.min(startPage + 2, totalPages);

    if (endPage - startPage < 2 && startPage > 1) {
      startPage = Math.max(endPage - 2, 1);
    }

    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    setPages(visiblePages);
  }, [current, total]);

  
  return (
    <div className="flex items-center gap-2 mb-2">
      <div 
      onClick={() => current > 1 && setPage(current - 1)}
      className={cn("min-w-24 h-[2.1rem] py-[5px] px-4 pr-6 cursor-pointer hover:bg-black/5 flex items-center justify-center rounded-[6px]",{
        " opacity-50 cursor-not-allowed ":current === 1
      })}>
        <Image src="/icons/arrow.svg" width={20} height={20} alt="arrow left"/>
        <p className="test-sm">Previous</p>
      </div>
      <div className="flex items-center gap-2">
        {pages.map((pageNumber) => (
          <div
            key={pageNumber}
            className={cn("w-9 h-8 } border-black/15 border rounded-[6px] flex items-center justify-center cursor-pointer",{
               "bg-black text-white": pageNumber === current,
                 "hover:bg-black/5": pageNumber !== current
               })}
            onClick={() => setPage(pageNumber)}>
            <p>{pageNumber}</p>
          </div>
        ))}
      </div>
      <div
      onClick={() => current < total && setPage(current + 1)}
       className={cn("min-w-24 h-[2.1rem] py-[5px] px-4 pl-6 cursor-pointer hover:bg-black/5 flex items-center justify-center rounded-[6px]",{
        "opacity-50 cursor-not-allowed": current === totalSize
       })}>
         <p className="test-sm">Next</p>
        <Image src="/icons/arrow.svg" width={20} height={20} alt="arrow left" className="rotate-180"/>
      </div>
    </div>
  )
}
