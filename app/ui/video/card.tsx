import Image from 'next/image'
import Link from 'next/link'

export default function Card() {
  return (
    <Link href="/video/1">
    <div className='w-full md:w-[16rem] lg:w-[20rem] xl:w-[23rem] h-[17rem] border-2 hover:border-sky-500/60 flex-none rounded-[25px] border-black/10 p-2 cursor-pointer'>
        <div className='w-full h-[70%] rounded-[23px] border border-black/10'></div>
        <div className='w-full flex justify-between gap-2 pt-2 px-2'>
           <div className='w-[85%]'>
           <h2 className='w-full  truncate font-medium '>My name is Godfred I come from Kumasi but live att</h2>
            <p className=' text-sm text-black/50 truncate'>My name is adMy name is Godfred I come from Kumasi but live att Godfred I come from live home is sthhhhhhhhhhhhhhhhhhhhhhhh  </p>
           </div>
           <div className='size-8 border flex-none border-black/20 rounded-full flex items-center justify-center '>
            <Image src="/icons/dot.svg" width={20} height={20} alt="dot icon" />
           </div>
        </div>
        
    </div>
    </Link>
  )
}
