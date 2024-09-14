"use client";
import Image from "next/image";
import { useRef , useEffect} from "react";
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";

export default function Recorder() {

  return (
    <div className="w-full h-full top-0 bottom-0 fixed z-[90] bg-black/30 flex items-center justify-center">
      <ReactMediaRecorder
      video
      render={({status, previewStream, startRecording, stopRecording, mediaBlobUrl })=>{
        return(<div
            className="w-[90%] h-[75hv] md:w-[70%] md:min-h-[82vh] bg-white 
            rounded-[38px] p-12 px-16">
            <div className="w-full h-[28rem] border rounded-[25px] border-black/30 overflow-hidden p-[1px]">
            <VideoPreview stream={previewStream}/>
            </div>
            <div className="my-4 mt-6 flex justify-between">
             <div className="flex items-center gap-2">
                <div 
                onClick={startRecording}
                className="py-2 px-4 cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md">
                     <Image src="/icons/camera.svg" width={25} height={25} alt="video recorder"/>
                    <p className="text-md">Start Recording</p>
                </div>
                <div 
                onClick={stopRecording}
                className="py-2 px-4 cursor-pointer bg-sky-300 text-blue-700 flex items-center gap-1 rounded-md">
                     <Image src="/icons/camera.svg" width={25} height={25} alt="video recorder"/>
                    <p className="text-md">Sop Recording</p>
                </div>
             </div>
             <p><p>{status}</p></p>
            </div>
          </div>)
      }}
      />
    </div>
  );
}


const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
    if (!stream) {
      return null;
    }
    return <video ref={videoRef} width={"100%"} height={"800"} autoPlay controls />;
  };