"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { useEdit } from "./editContext";
import { motion } from "framer-motion";


export default function Recorder() {
  const { recorder, setRecorder } = useEdit();
  const [video, setVideo] = useState<any>(null);
  const [recording, setRecord] = useState(true);

  //  handle cancel

  const handleCancel = () => {
    setRecorder({
      ...recorder,
      isActive: false,
    });
  };

  // handle save
  const handleSave = () => {
    setRecorder({
      ...recorder,
      isActive: false,
      video: video,
    });
  };


  return (
    <div className="w-full h-full top-0 bottom-0 fixed z-[90] bg-black/30 flex items-center justify-center">
      <ReactMediaRecorder
        video
        onStop={(blobUrl,blob)=>setVideo(blob)}
        render={({
          status,
          previewStream,
          startRecording,
          stopRecording,
          mediaBlobUrl,
        }) => {
          useEffect(() => {
            if (status === "recording") {
              setTimeout(() => {
                setRecord(false);
              }, 1500);
            }
          }, [status]);

          return (
            <div
              className="w-[90%] h-[75hv] md:min-w-[70%] md:h-[90vh] bg-white 
            md:rounded-[38px] rounded-md p-6 md:p-16 flex flex-col md:flex-row md:gap-6"
            >
              <div className="w-full h-[360px] md:w-[70%] flex items-center justify-center md:min-h-[510px] rounded overflow-hidden border  border-black/30 relative p-[2px] ">
                {status === "idle" && (
                  <div className="w-full h-full bg-gray-100 flex items-center flex-col gap-3 justify-center">
                    <div className="siz-24 border-2 border-black rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/user.svg"
                        width={30}
                        height={30}
                        alt="user"
                      />
                    </div>
                    <p className="text-black/50 text-sm">
                      Click start to record
                    </p>
                  </div>
                )}
                {recording && status === "acquiring_media" && (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center ">
                    Loading...
                  </div>
                )}
                {status === "recording" && (
                  <VideoPreview stream={previewStream} />
                )}
                {status === "stopped" && (
                  <VideoPreview media={mediaBlobUrl} setVideo={setVideo} />
                )}
              </div>
              <div className="flex flex-col gap-4 md:gap-0  md:justify-between">
                {status === "recording" ? (
                  <div className="flex gap-2 items-center mt-4 md:mt-0">
                    <motion.div
                      whileInView={{
                        scale: [1, 0.5, 1],
                      }}
                      transition={{ repeat: -1 }}
                      className="size-4 bg-red-600 rounded-full"
                    ></motion.div>
                    <p className="">Recording</p>
                  </div>
                ) : (
                  <div className="opacity-0">p</div>
                )}
                <div className="w-full md:w-auto flex flex-col mt-4 md:mt-0 items-center md:items-start ">
                  <div className="md:w-full flex items-center gap-3">
                    <div
                      onClick={startRecording}
                      className="py-2 px-6 cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md"
                    >
                      <Image
                        src="/icons/camera.svg"
                        width={25}
                        height={25}
                        alt="video recorder"
                      />
                      <p className="text-md">Start</p>
                    </div>
                    <div
                      onClick={stopRecording}
                      className="py-2 px-6 cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md"
                    >
                      <Image
                        src="/icons/stop.svg"
                        width={26}
                        height={26}
                        alt="stop video"
                      />
                      <p className="text-md">Stop</p>
                    </div>
                  </div>
                  <div className="md:w-full flex items-center gap-3 my-4">
                    <div
                      onClick={handleSave}
                      className="py-2 px-[2.3rem] cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md"
                    >
                      <p className="text-md">Save</p>
                    </div>
                    <div
                      onClick={handleCancel}
                      className="py-2 px-8 cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md"
                    >
                      <p className="text-md">Cancel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

const VideoPreview = ({
  stream,
  media,
  setVideo,
}: {
  stream?: MediaStream | null;
  media?: string | null;
  setVideo?: any;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream && !media) {
    return null;
  }


  return (
    <div className="w-full h-full relative">
      {stream ? (
        <video ref={videoRef} className="custom-video" autoPlay controls />
      ) : (
        media && (
          <video src={media} autoPlay controls className="custom-video" />
        )
      )}
    </div>
  );
};
