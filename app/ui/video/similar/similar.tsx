import { getSignData, getSimilarData } from '@/app/server/data'
import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'


export default async function Similar({currentItemID}:{currentItemID:number}) {

  const session = await auth()

  const email = session?.user.email

  const data = await getSimilarData({noOfItems:3,currentItemID:currentItemID, email , typeReturn : 'not contain'})


  return (
   
      <div className='w-auto shrink h-[95vh] 2xl:h-[90vh] overflow-hidden  flex-col justify-end pb-2 pt-10 2xl:pt-0 hidden xl:flex 2xl:mt-12'>
        <div className='w-[21rem] flex-[1] 2xl:w-[400px] h-full border border-black/20 rounded-[25px] p-2 text-black overflow-hidden'>
        <h3 className='font-medium text-xl p-4'>Similar</h3>
        <div className='w-full h-full mt-4 flex flex-col items-center p-6 px-4 gap-4'>
          <SimilarCard Data={data}/>
        </div>
        </div>
    </div>
  )
}


const SimilarCard = ( { Data}:{ Data:any}) => {


  return(
    <>
    {Data && Data.map((item:any)=>(
      <Link key={item.id} href={`${item.id}`} className='w-full h-[12rem] border border-gray-300/70 rounded-[25px]   overflow-hidden cursor-pointer group/g'>
      <div className="w-full h-full relative">
      <div className='absolute z-20 w-full h-full p-4 bg-black/40 group-hover/g:bg-black/60 flex flex-col justify-end'>
       <h3 className='text-lg font-medium text-white'>{item.attributes.video_name}</h3>
       </div>
       <video className='w-full h-full object-cover' >
          <source src={`https://strap-val.onrender.com${item.attributes.video_url}`} type="video/mp4"/>
        </video>
      </div>
     </Link>
    ))}
    </>
  )
}