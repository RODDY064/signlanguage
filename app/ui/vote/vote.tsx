"use client"

import { validateVideo } from "@/app/server/validate"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import toast from "react-hot-toast"

const ONE_DAY_IN_MS = 1; // Expire cookie in 1 day

export default function Vote({id }:{id?:string}) {
  const [voted, setVoted] = useState<"correct" | "wrong">('correct')
  const [isVoted, setIsVoted] = useState<boolean>(false)

  // Fetch the stored vote from cookies
  useEffect(() => {
    const storedVote = Cookies.get(`video_${id}`)
    if (storedVote) {
      setVoted(storedVote as "correct" | "wrong")
      setIsVoted(true)
    }
    console.log(storedVote)
  }, [id])

  useEffect(()=>{
   console.log(isVoted)
  },[isVoted])

  const handleVote = async (vote: "correct" | "wrong") => {
    const input = {
      videoId: id as string,
      type: vote
    }

    const res = await validateVideo(input)
    
    if (res.status === 200) {
      toast.success('You have successfully voted on the video')
      setVoted(vote)
      setIsVoted(true)
      
      // Store the vote in cookies with a 1-day expiration
      Cookies.set(`video_${id}`, vote, { expires: ONE_DAY_IN_MS });
    } else if (res.status === 201) {
      setIsVoted(true)
      setVoted(res.vote as "correct" | "wrong")
      toast.error("You have already voted")
    }
  }

  return (
    <div className={`flex flex-col md:flex-row gap-4 ${isVoted ? 'md:gap-2':'md:gap-6 '} items-center md:justify-end my-10`}>
        <p className="font-medium">{!isVoted ? 'Please vote' : 'Voted :' }</p>
       {isVoted ? 
         (<>
          {voted === 'correct'  && <p id="voted_correct" className="text-xl font-medium text-green-600">Correct</p>}
          {voted === 'wrong'  && <p id="voted_wrong" className="text-xl font-medium text-red-600">Wrong</p>}
          </>):
         (<div className="flex gap-4 items-center">
          <div 
            id="vote_correct"
           onClick={()=>handleVote('correct')}
          className="w-32 px-6 h-10 bg-green-100/70 rounded-[6px] cursor-pointer flex items-center justify-center">
              <p className="text-green-500">Correct</p>
          </div>
          <div 
           id="vote_wrong"
          onClick={()=>handleVote('wrong')}
          className="w-32 px-6 h-10 bg-red-100/70 rounded-[6px] cursor-pointer flex items-center justify-center">
              <p className="text-red-500">Wrong</p>
          </div>
      </div>)}
    </div>
  )
}
