"use client"

import Image from 'next/image'
import {useState} from 'react'
import Account from './account'


export default function Nav() {

  const [accountTabIsActive, setAccountTabIsActive] = useState(false)


  return (
    <div className='w-full md:w-auto px-2 py-4  z-20 md:p-4 flex justify-between md:justify-end absolute md:right-2  '>
      <h1 className='md:hidden'>logo</h1>
      <div className='cursor-pointer md:hidden'>
        <Image src="/icons/menu.svg" width={35} height={35} alt="menu"/>
      </div>
      <div className='hidden md:flex gap-6 items-center'>
        <div className='relative'>
        <div onClick={()=>setAccountTabIsActive(!accountTabIsActive)} className='size-10 rounded-full border border-black/20 flex items-center justify-center cursor-pointer'>
          <Image src="/icons/user.svg" width={24} height={24} alt='user'/>
        </div>
         {accountTabIsActive && <Account/>}
        </div>
        <div className='size-10 rounded-full border border-black/20 items-center justify-center cursor-pointer hidden lg:flex'>
          <Image src="/icons/notification.svg" width={24} height={24} alt='notification'/>
        </div>
      </div>
    </div>
  )
}
