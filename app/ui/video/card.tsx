import Image from 'next/image'
import Link from 'next/link'

import { useRef } from 'react'

export default function Card({ video }:{video:any}) {

   // hover to play video with sound
    const videoRef = useRef<HTMLVideoElement>(null); 


    const handleMouseEnter = () => {
        if(videoRef.current){
            videoRef.current.muted = false; // Unmute the video
            videoRef.current.play();
        }
    }
    const handleMouseLeave = () => {
        if(videoRef.current){
            videoRef.current.pause();
            videoRef.current.muted = true; // Mute the video
        }
    }



  return (
    <Link href={`/video/${video.id}`}>
    <div className='w-full md:w-[16rem] lg:w-[20rem] xl:w-[20rem] h-[17rem] border-2 hover:border-sky-500/60 flex-none rounded-[25px] border-black/10 p-2 cursor-pointer'>
        <div className='w-full h-[70%] rounded-[23px] border border-black/10 overflow-hidden'>
        <video  ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-full h-full'>
            <source src={video.attributes.video_url} type="video/mp4"/>
        </video>
        </div>
        <div className='w-full flex justify-between gap-2 pt-2 px-2'>
           <div className='w-[85%]'>
           <h2 className='w-full  truncate font-medium my-2'>{video.attributes.video_name}</h2>
           </div>
           <div className='size-8 border flex-none border-black/20 rounded-full flex items-center justify-center '>
            <Image src="/icons/dot.svg" width={20} height={20} alt="dot icon" />
           </div>
        </div>
        
    </div>
    </Link>
  )
}
