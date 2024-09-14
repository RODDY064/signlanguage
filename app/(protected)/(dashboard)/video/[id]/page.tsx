
import { getSignDataById } from '@/app/server/data'
import EditContainer from '@/app/ui/edit/editContainer'
import VideoContainer from '@/app/ui/video/dynamic/videoContainer'
import Similar from '@/app/ui/video/similar/similar'



export default async function DynamicVideo({ params :{ id }}:{params:{id:string}}) {

  // const data = await getSignDataById(id)
  const data = null
  
  return (
  <>
    <div className='w-full min-h-screen max-w-screen-2xl 2xl:mx-auto overflow-hidden flex-col flex items-center p-2  md:pl-[13rem] lg:pl-[17rem] md:pr-1 pt-24 md:pt-4'>
      <div className='w-full 2xl:w-full px-2 h-full flex flex-col gap-4 2xl:gap-14 md:justify-between max-sm:items-center  md:flex-row p-4 md:pl-10 md:pr-2'>
         <VideoContainer videoData={data}/>     
         <Similar currentItemID={id}/>
      </div>
    </div>
    <EditContainer/>
  </>
  )
}
