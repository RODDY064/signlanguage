"use client"

import { validateVideo } from "@/app/server/validate"
import { useSession } from "next-auth/react"
import { useState , useEffect } from "react"

export default function Vote({id }:{id:number}) {
  const { data : session , update } = useSession()
  const [voted, setVoted] = useState<"correct" | "wrong">('correct')
  const [isVoted, setIsVoted] = useState<boolean>(false)

  useEffect(() => {
    const storedVote = localStorage.getItem(`vote_${id}`)
    if (storedVote) {
      setVoted(storedVote as "correct" | "wrong")
      setIsVoted(true)
    }
  }, [id])

  const handleVote = async (vote: "correct" | "wrong") => {
    
    if (session?.user) {
      const input = {
        id: id,
        user_id: session.user.id,
        email: session.user.email,
        type: vote
      }

      const res = await validateVideo(input)
      //  console.log(res)
      if (res.status === 200) {
        setVoted(vote)
        setIsVoted(true)
        localStorage.setItem(`vote_${id}`, vote)
      }
      console.log('love')
    }else{
      update()
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
