"use client";

import Image from "next/image";
import Vote from "../../vote/vote";
import { useEdit } from "../../edit/editContext";
import { Video } from "@/app/server/data";
import { formatVideoId } from "@/utils/videoUrl";
import { motion } from "framer-motion";
import Comment from "../../comment/comment";

export default function VideoContainer({
  videoData,
}: {
  videoData: Video | null;
}) {
  const { setEdit, edit } = useEdit();

  return (
    <div className="w-full flex-[2] md:w-[45rem] 2xl:w-[1280px] max-sm:mb-10">
      <div className="w-full  h-[20rem]   md:h-[28rem] rounded-[20px] border border-black/10 relative md:mt-10 xl:mt-0 overflow-hidden">
        {videoData !== null ? (
          <>
            <video controls autoPlay={false} className="w-full h-full">
              <source
                src={`https://videos.vskuul.com/storage/${formatVideoId(
                  videoData.video_url
                )}`}
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          <Ring />
        )}
      </div>
      <div className="my-4 md:px-2">
        <div className="flex gap-2 justify-between">
          <div>
            <h1 className="text-2xl font-bold px-4 ">
              <span className="text-xl text-black/50 font-medium">
                Description :{" "}
              </span>{" "}
              {videoData?.video_name}
            </h1>
          </div>
          <div
            id="edit"
            onClick={() => setEdit({ ...edit, isActive: true })}
            className="px-8 hidden  md:px-10 h-12 cursor-pointer md:flex items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]"
          >
            <p>Edit</p>
            <Image
              src="/icons/edit.svg"
              width={20}
              height={20}
              alt="edit"
              className="group-hover/m:hidden"
            />
            <Image
              src="/icons/edit_b.svg"
              width={20}
              height={20}
              alt="edit"
              className="hidden group-hover/m:flex"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end md:hidden my-4">
        <div
          id="edit"
          onClick={() => setEdit({ ...edit, isActive: true })}
          className="px-8 flex   md:px-10 h-12 cursor-pointer md:hidden items-center gap-2 justify-center group/m hover:bg-sky-300 hover:text-blue-700 bg-sky-600 text-white rounded-[25px]"
        >
          <p>Edit</p>
          <Image
            src="/icons/edit.svg"
            width={20}
            height={20}
            alt="edit"
            className="group-hover/m:hidden"
          />
          <Image
            src="/icons/edit_b.svg"
            width={20}
            height={20}
            alt="edit"
            className="hidden group-hover/m:flex"
          />
        </div>
      </div>
      <Vote id={videoData?.id} />
      <Comment videoID={videoData?.id as string} />
    </div>
  );
}

const Ring = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="container"
        viewBox="0 0 40 40"
        height="20"
        width="20"
      >
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
          stroke="#dc2626"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: "1, 200", strokeDashoffset: 0 }}
          animate={{
            strokeDasharray: ["1,150", "75,150", "75,150"],
            strokeDashoffset: [0, -25, -100],
          }}
          transition={{
            duration: 2 * 0.75,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};
