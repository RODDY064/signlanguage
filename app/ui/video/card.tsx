
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ video }: { video: any }) {

  return (
    <Link
      className='w-full px-4 md:px-0 md:w-auto'
      id={`card ${video.id}`}
      href={`/video/${video.id}?id=${video.id}`}
      aria-label={`Watch video: ${video.video_name}`}
    >
      <div
        className='w-full md:w-[16rem] lg:w-[20rem] xl:w-[20rem] h-[17rem] border-2 hover:border-sky-500/60 flex-none rounded-[25px] border-black/10 p-2 cursor-pointer'>
        <div className='w-full h-[70%] rounded-[23px] border border-black/10 overflow-hidden'>
          <video
            playsInline
            className="w-full h-full object-cover">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full flex justify-between gap-2 pt-2 px-2'>
          <div className='w-[85%]'>
            <h2 className='w-full truncate font-medium my-2'>{video.video_name}</h2>
          </div>
          <div className='size-8 border flex-none border-black/20 rounded-full flex items-center justify-center'>
            <Image src="/icons/dot.svg" width={20} height={20} alt="dot icon" />
          </div>
        </div>
      </div>
    </Link>
  );
}
