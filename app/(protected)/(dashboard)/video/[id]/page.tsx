import VideoContainer from '@/app/ui/video/dynamic/videoContainer'
import Similar from '@/app/ui/video/similar/simlar'


export default function DynamicVideo() {
  return (
    <div className='w-full h-screen overflow-hidden flex-col flex items-center   md:pl-[13rem] lg:pl-[17rem] md:pr-1 pt-24 md:pt-4'>
      <div className='w-full 2xl:w-[80%] h-full flex flex-col gap-4 2xl:gap-14 md:justify-between max-sm:items-center  md:flex-row p-4 md:pl-10 md:pr-2'>
         <VideoContainer/>     
         <Similar/>
      </div>
    </div>
  )
}
