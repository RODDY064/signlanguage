import { getSignData } from "@/app/server/data"
import { auth } from "@/auth"
import Link from "next/link"


export default async function History() {
   const session = await auth()
  const email = session?.user.email

   const data = await getSignData({ email , typeReturn : 'contain'})
   



  return (
    <div className='w-full h-screen overflow-hidden    md:pl-[13rem] lg:pl-[17rem] md:pr-6 pt-24 md:pt-8 items-center  flex flex-col '>
      <div className='w-[95%] h-full'>
      <h1 className='text-2xl font-bold'>History</h1>
      <div className='w-full h-full overflow-y-scroll pb-20 border-t border-black/40 pt-6 mt-4 flex md:flex-wrap flex-col items-center md:flex-row md:items-start gap-4 place-content-start'>
       {data?.length == 0 && data[0] == null  ?
        (<>
         <p>No history data available</p>
         </>):(
          <>
          {data?.map((item)=>(
          <HistoryCard key={item.id} data={item} email={email}/>
       ))}
          </>
        )}
      </div>
      </div>
    </div>)
}


const HistoryCard = ({ data , email }:{ data:any ,email?:string})=>{
 
  const userVote = data.attributes.users_voted.find((vote:any) => vote.email === email);

  return(
    <div className='w-[20rem] h-[17rem] border border-black/30 cursor-pointer rounded-[25px] p-2'>
      <div className='w-full h-[10.5rem] rounded-2xl border border-black/10 '>
      <video  muted className='w-full h-full'>
            <source src={data.attributes.video_url} type="video/mp4"/>
        </video>
      </div>
      <div className='py-2'>
        <p className='text-lg px-2 truncate'><span className='text-sm text-black/60 '>Description : </span>{data.attributes.video_name}</p>
       <div className="flex items-center justify-between">
       <p className={`text-md px-2 ${userVote?.type === 'correct' ? 'text-green-600':'text-red-600'}`}><span className='text-sm text-black/60 '>Your vote : </span> {userVote?.type || 'Not voted'}</p> 
        <Link href={`/video/${data.id}?id=${data.id}`} className="px-2 text-blue-600">edit</Link>
        </div>      
      </div>
    </div>
  )
}