'use server'

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export  interface Video {
  id: string;
  video_name:string,
  video_url:string,
  description?:string | null,
  final_gross?:string | null,
  createdAt: Date;
   updatedAt: Date;
   votes?:any
}


export async function getSignData({
  pagination,
  typeReturn,
}: {
  pagination: number;
  typeReturn: "contain" | "not contain";
}) {
  try {
    const session = await auth()
    const pageSize = 6;
    const totalCount = await prisma.video.count();
    const totalPages = Math.ceil(totalCount / pageSize);
    const skip = (pagination - 1) * pageSize;

    let videoData;

     if(typeReturn === 'not contain'){
       videoData = await prisma.video.findMany({
        skip:skip,
        take: pageSize,
        where:{
          votes:{
            none:{
              userId: session?.user?.id
            }
          }
        }
      });
     }else{

      videoData  = await prisma.video.findMany({
        skip:skip,
        take:pageSize,
        where:{
          votes:{
            some:{
              userId: session?.user?.id
            }
          }
        },
        include:{
          votes:{
            select:{
              voteType:true
            }
          }
        }
      })
     }

     if(!videoData){
      throw new Error("Fail to fetch data");
     }

    
    return { 
      pages:totalPages,
      count:totalCount,
      data:videoData
    }

  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get similar data

export async function getSimilarData(currentItemID:string) {
  try {
    const session = await auth()
    const similarData = await prisma.video.findMany({
      take: 3,
      where: {
        AND: [
          {
            id: { not: currentItemID }, // Exclude the current item
          },
          {
            votes: {
              none: {
                userId: session?.user?.id 
              }
            }
          }
        ]
      }
    })
   if(!similarData){
    throw new Error("Fail to fetch data");
   }

   return similarData
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get api data by id

export async function getSignDataById(videoId: string) {
  try {
    const videoData = await prisma.video.findFirst({
      where:{
        id:videoId
      }
    })
    if(!videoData){
      throw new Error("Fail to fetch data");
    }
    // console.log(videoData)
    return videoData
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}
