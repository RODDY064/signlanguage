"use client";
import React from 'react'
import { createVideos } from '../ui/form/populate';

export default function Mod() {
  return (
    <div className='w-full flex flex-col items-center p-24'>
        <button
        onClick={()=>createVideos()}
         className='px-6 py-2 bg-black text-white rounded-md'>Submit</button>
    </div>
  )
}
