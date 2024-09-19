"use client";

import Image from "next/image";
import { useEdit } from "./editContext";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateDataSchema, UpdateDataSchemaType } from "../form/schema";
import Cookies from "js-cookie"; // Import Cookies
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const ONE_DAY_IN_MS = 1; // Cookies expiration in 1 day

export default function Edit() {
  const [uploadedFile, setUploadedFile] = useState<File | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const { setEdit ,recorder, setRecorder, edit} = useEdit();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();


  useEffect(()=>{
   setUploadedFile(recorder.video)
  },[recorder.video])

  const { register, handleSubmit, formState: { errors } } = useForm<UpdateDataSchemaType>({
    resolver: zodResolver(updateDataSchema),
  });

  const onSubmit: SubmitHandler<UpdateDataSchemaType> = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("vote", data.vote);

    console.log(id);

    if (id) {
      formData.append("id", id);
    } else {
      return;
    }

    if (uploadedFile) {
      formData.append("video", uploadedFile);
    }

    try {
      const response = await fetch("/api/video", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully.");
        toast.success("Video update successfully");
        setEdit({
        ...edit,
        isActive:false
        });
        // Store the video vote in cookies with 1-day expiration
        Cookies.set(`video_${id}`, data.vote, { expires: ONE_DAY_IN_MS });

        router.push("/dashboard");
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error in updateData:", error);
      setError("Failed to submit the form. Please try again.");
    }
  };

  useEffect(() => {
    const storedVote = Cookies.get(`video_${id}`);
    if (storedVote) {
      console.log("Vote found in cookies:", storedVote);
    }
    console.log(storedVote);
  }, [id]);

  return (
    <div className="w-full h-full top-0 bottom-0 fixed z-[90] bg-black/30 flex items-center justify-center">
      <div className="w-[90%] min-h-[70%] md:w-[70%] xl:w-[40%] md:min-h-[40rem] 2xl:h-[45rem] bg-white rounded-[12px] md:rounded-[15px] py-4 p-6">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-blue-500">Edit</h1>
          <div id="edit_close" onClick={() => setEdit({...edit,isActive:false})} className="">
            <Image
              src="/icons/x.svg"
              width={24}
              height={24}
              alt="cancel"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full mt-2 px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-[15px] font-medium">Description</label>
            <textarea
              id="description"
              {...register("description")}
              name="description"
              className="w-full min-h-[180px] max-h-[200px] bg-transparent border focus:outline-none border-black/20 focus:border-blue-500/70 
               rounded-[8px] p-2 mt-2 mb-2"
            />
            {errors.description && (
              <p className="text-red-500 text-sm font-light mb-2">
                {errors.description.message}
              </p>
            )}
            <div  onClick={()=>setRecorder({...recorder,isActive:true})}
             className="flex flex-col items-center justify-center w-full 2xl:mt-10">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-sky-100"
              >
                <div 
                className="flex flex-col items-center justify-center pt-5 pb-6 mb-5">
                <svg fill="#9ca3af" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>video-camera</title> <path d="M30.395 6.362c-0.112-0.071-0.248-0.113-0.395-0.113-0.122 0-0.238 0.030-0.34 0.082l0.004-0.002-6.938 3.468c-0.106-1.426-1.287-2.543-2.729-2.548h-15.996c-1.518 0.002-2.748 1.232-2.75 2.75v12.001c0.002 1.518 1.232 2.748 2.75 2.75h15.996c1.443-0.005 2.623-1.122 2.729-2.538l0.001-0.009 6.939 3.468c0.097 0.050 0.211 0.080 0.333 0.080 0.001 0 0.002 0 0.003 0h-0c0.001 0 0.001 0 0.002 0 0.413 0 0.748-0.335 0.748-0.748 0-0.001 0-0.001 0-0.002v0-18c-0-0.268-0.141-0.503-0.352-0.636l-0.003-0.002zM21.246 22c-0.001 0.69-0.56 1.249-1.25 1.25h-15.996c-0.69-0.001-1.249-0.56-1.25-1.25v-12.001c0.001-0.69 0.56-1.249 1.25-1.25h15.996c0.69 0.001 1.249 0.56 1.25 1.25v12.001zM29.25 23.787l-6.504-3.25v-9.073l6.504-3.251z"></path> </g></svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to record a video</span> 
                  </p>
                </div>
              </label>
              {uploadedFile && (
                <div className="mt-4 text-sm text-green-600">
                  Video uploaded successfully!
                </div>
              )}
            </div>
            <div className="w-full max-sm:text-center my-5">
              <label className="text-[15px] font-medium">Please select a value to vote</label>
              <div className="flex my-2 gap-6 justify-center items-center w-full">
                <li className="flex gap-2 items-center">
                  <input
                    value="correct"
                    {...register("vote", { required: true })}
                    type="radio"
                    name="vote"
                    required
                    className="styled-checkbox"
                    id="correct"
                  />
                  <label htmlFor="correct" className="text-green-600">Correct</label>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    value="wrong"
                    {...register("vote", { required: true })}
                    type="radio"
                    name="vote"
                    required
                    className="styled2-checkbox"
                    id="wrong"
                  />
                  <label htmlFor="wrong" className="text-red-600">Wrong</label>
                </li>
              </div>
            </div>
            <div className="w-full flex justify-end my-4">
              <input 
                type="submit"
                className="w-full text-white h-12 bg-blue-500 hover:bg-sky-200 hover:text-blue-700 cursor-pointer rounded-[8px]"
              />
            </div>
          </form>
          {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
