"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingContainer() {
  return (
    <div className="w-full h-[12rem] pt-24 flex flex-col ">
     <Ring/>
    </div>
  )
}







const  Ring =()=> {
  return (
   <div className="w-full h-full flex items-center justify-center">
      <motion.svg
      animate={{
        rotate:360
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType:'loop',
        ease: 'easeInOut',
      }}
      className="container"
      viewBox="0 0 40 40"
      height="40"
      width="40">
      <motion.circle
        className="track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
      <motion.circle
        className="car"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        stroke='#000'
        strokeLinecap='round'
        fill="none"
        initial={{ strokeDasharray: '1, 200', strokeDashoffset: 0 }}
        animate={{
          strokeDasharray: ['1,150','75,150','75,150'],
          strokeDashoffset: [0,-25,-100],
        }}
        transition={{
          duration: 2 * 0.75,
          repeat: Infinity,
          repeatType:'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
   </div>
  )
}
