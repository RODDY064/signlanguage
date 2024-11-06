import {  getSimilarData, Video } from '@/app/server/data'
import { formatVideoId } from '@/utils/videoUrl';
import Link from 'next/link'




export default async function Similar({currentItemID}:{currentItemID:string}) {


  function formatVideoId(videoId: string): string {
    if(!videoId){
      return ""
    }
    const formatted = videoId
      .toLowerCase()
      .replace(/mvi/, 'Mvi') 
      .replace('_', ' '); 
    
      return `${formatted}.mp4`;
  }



  async function fetchData(currentItemID:string) {
    const url = process.env.Base_Url
    try {
      const req = await fetch(`${url}/api/getSimilair`,{
        method:"POST",
        cache:'no-cache',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:currentItemID})
      })
  
      if(!req.ok){
        console.error("Error fetching data:", req.statusText);
      }
  
      if(req.status === 200){
        const data = await req.json()
         // proccess the data
    
         const newData = data.data?.map((video:any) => {
          return {
            ...video,
            url: `https://videos.vskuul.com/storage/${formatVideoId(video.video_url)}`,
          };
        });


        return newData
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  const data = await fetchData(currentItemID)

  return (
   
      <div className='w-auto shrink h-[95vh] 2xl:h-[90vh] overflow-hidden  flex-col justify-end pb-2 pt-10 2xl:pt-0 hidden xl:flex 2xl:mt-12'>
        <div className='w-[21rem] flex-[1] 2xl:w-[400px] h-full border border-black/20 rounded-[25px] p-2 text-black overflow-hidden'>
        <h3 className='font-medium text-xl p-4 pb-2'>Similar</h3>
        <div className='w-full h-full pt-0 flex flex-col items-center p-6 px-4 gap-4'>
          <SimilarCard Data={data}/>
        </div>
        </div>
    </div>
  )
}


const SimilarCard = ( { Data}:{ Data:Video[]}) => {

  if (!Data) {
    return <div className='mt-12'>Loading...</div>;
  } 


  return(
    <>
    {Data && Data?.map((item:any)=>(
      <Link key={item.id} href={`${item.id}`} className='w-full h-[30%] border border-gray-300/70 rounded-[25px]   overflow-hidden cursor-pointer group/g'>
      <div className="w-full h-full relative">
      <div className='absolute z-20 w-full h-full p-4 bg-black/40 group-hover/g:bg-black/60 flex flex-col justify-end'>
       <h3 className='text-lg font-medium text-white'>{item.video_name}</h3>
       </div>
       <video 
       className='w-full h-full object-cover' >
          <source src={item.url} type="video/mp4"/>
        </video>
      </div>
     </Link>
    ))}
    </>
  )
}