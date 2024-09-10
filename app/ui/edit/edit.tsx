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
  const { setEdit } = useEdit();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const validFileTypes = ["video/mp4", "video/webm", "video/ogg", "video/mov"];
      if (!validFileTypes.includes(file.type)) {
        setError("Invalid file type. Please upload a video file.");
        return;
      }

      // Validate file size (20 MB)
      const maxSizeInBytes = 20 * 1024 * 1024; // 20 MB
      if (file.size > maxSizeInBytes) {
        setError("File size exceeds 20 MB. Please upload a smaller video.");
        return;
      }

      setUploadedFile(file);
      setError(""); // Clear any previous error messages
    }
  };

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
        setEdit(false);
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
  }, [id]);

  return (
    <div className="w-full h-full top-0 bottom-0 fixed z-[90] bg-black/30 flex items-center justify-center">
      <div className="w-[90%] min-h-[70%] md:w-[70%] xl:w-[40%] md:min-h-[40rem] 2xl:h-[45rem] bg-white rounded-[12px] md:rounded-[15px] py-4 p-6">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-blue-500">Edit</h1>
          <div id="edit_close" onClick={() => setEdit(false)} className="">
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
            <div className="flex flex-col items-center justify-center w-full 2xl:mt-10">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-sky-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 mb-5">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">
                    MP4, WebM, or Ogg (MAX. 20 MB)
                  </p>
                </div>
                <input
                  name="video"
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="video/mp4, video/webm, video/ogg"
                  onChange={handleFileChange}
                />
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
