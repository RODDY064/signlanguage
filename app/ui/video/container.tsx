"use client"

import Card from "./card"

export default function Container() {
  return (
    <div className="w-full h-full mt-6 px-2 md:px-0">
        <h1 className="px-2 md:px-0 text-xl font-bold">Videos</h1>
        <div className="w-full h-full overflow-hidden overflow-y-scroll pb-[8rem] 2xl:pb-auto border-t border-black/20 px-4 md:px-0 lg:pl-6 xl:pl-4  py-4 gap-6 2xl:gap-6 md:gap-4 flex md:flex-wrap flex-col  md:flex-row">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}
