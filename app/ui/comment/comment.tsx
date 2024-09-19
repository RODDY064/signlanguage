export const dynamic = 'force-dynamic'

import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useEdit } from '../edit/editContext';
import { useRouter } from 'next/navigation';

export const DegreeTypeSchema = z.object({
  degreeOfVote: z.coerce.number().min(0).max(100).nullable(),
  comment: z.string().nullable().optional()
});

type DegreeType = z.infer<typeof DegreeTypeSchema>;

export default function Comment({ videoID }: { videoID: string }) {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<DegreeType>({
    defaultValues:{
        degreeOfVote:null,
        comment:null
    },
    resolver: zodResolver(DegreeTypeSchema)
  });

  const { edit ,setEdit} = useEdit()

  const onSubmit = async (data: DegreeType) => {
    const results =  DegreeTypeSchema.safeParse(data)

    if(!edit.voterID){
        toast.error("Please click to vote")
      return 
    }

    const newData = {
        ...data,
        videoID:videoID,
        voterID:edit.voterID
    }
  
    if (results.success) {
      try {
        const response = await fetch("/api/comment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        });
  
        const degreeRes = await response.json();
  
        if (response.ok) {
          toast.success(degreeRes.message);
          router.push('/dashboard')
        } else {
          toast.error(degreeRes.error || "An error occurred");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred while submitting the form");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-1 max-sm:mt-10">
      <div className="flex gap-4 items-center my-1">
        <label>Degree of Vote:</label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="0"
          {...register('degreeOfVote')}
          name="degreeOfVote"
          className="w-28 h-8 flex bg-white border-2 border-gray-200 rounded-[4px] focus-within:border-blue-500/70 px-2 focus-within:outline-none invalid:border-red-600"
        />
      </div>
      <p className="text-sm text-black/40">Please enter from 0 to 100 the degree of the vote</p>
      <div className="mt-4 gap-4 flex items-center">
        <label>Comment:</label>
        <input
          type="text"
          {...register('comment')}
          name="comment"
          placeholder="Enter your comment"
          className="w-[80%] md:w-[24rem] h-10 flex bg-white border-2 border-gray-200 rounded-md focus-within:border-blue-500/70 px-2 text-sm focus-within:outline-none invalid:border-red-600"
        />
      </div>
      <div className="w-full flex justify-end mt-4">
        <input type="submit" className="px-6 py-2 bg-sky-600 hover:bg-sky-300 hover:text-blue-600 rounded-md cursor-pointer text-white text-center" />
      </div>
    </form>
  );
}