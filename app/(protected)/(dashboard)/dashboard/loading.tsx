"use client"

import React from 'react'
import { Suspense } from 'react';
import Search from '@/app/ui/search/search';
import LoadingContainer from '@/app/ui/loading/loading';



export default function Loading() {
  return (
    <div className='w-full h-screen overflow-hidden   md:pl-[13rem] lg:pl-[18rem] md:pr-4 pt-24 md:pt-4'>
        <div className="w-full h-full relative right-0">
      <Suspense fallback={<div>Loading...</div>}>
      <Search/>
      </Suspense>
      <LoadingContainer/>
    </div>
    </div>
  )
}
