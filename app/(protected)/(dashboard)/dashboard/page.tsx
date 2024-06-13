import { getSignData } from "@/app/server/data"
import Search from "@/app/ui/search/search"
import Container from "@/app/ui/video/container"
import { Suspense } from "react"


const SearchFallBack = ()=>{
  return (
    <div>Loading...</div>
  )
}



export default async function Dashboard() {

  const data = await getSignData()

  return (
    <div className='w-full h-screen overflow-hidden   md:pl-[13rem] lg:pl-[18rem] md:pr-4 pt-24 md:pt-4 '>
    <div className="w-full h-full relative right-0">
      <Suspense fallback={<SearchFallBack/>}>
      <Search/>
      </Suspense>
      <Container videoData={data}/>
    </div>
    </div>
  )
}


