export const dynamic = 'force-dynamic'

import { getSignData } from "@/app/server/data"
import { validateVideo } from "@/app/server/validate"
import Search from "@/app/ui/search/search"
import Container from "@/app/ui/video/container"
import { auth } from "@/auth"
import { Suspense } from "react"


 export const SearchFallBack = ()=>{
  return (
    <div>Loading...</div>
  )
}



export default async function Dashboard() {

  const session = await auth()

  const email = session?.user.email

  const data = await getSignData( { email , typeReturn : 'not contain'})

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


