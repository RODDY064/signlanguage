"use server"

import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient()

// Define types using Zod for runtime type checking
const ValidateTypeSchema = z.object({
    videoId: z.string(),
    type: z.union([z.literal('correct'), z.literal('wrong')])
 });

type ValidateType = z.infer<typeof ValidateTypeSchema>;

export async function validateVideo(input: ValidateType) {
  try {
    const { videoId , type } = input;
    const session  = await auth()
    const votedAlready = await prisma.video.findFirst({
      where:{
        id:videoId,
        votes:{
          some:{
            userId:session?.user?.id
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

    console.log(votedAlready?.votes[0]?.voteType,'vote')

    if(votedAlready){
     return { status:201, message:"Already voted" , vote:votedAlready.votes[0].voteType}
    }

    const voteData = await prisma.vote.create({
      data:{
        userId:session?.user?.id as string,
        videoId:videoId,
        voteType:type as string

      }
    })

    // console.log(voteData)

    console.log('Data updated successfully');
    return { status: 200, message: 'Data updated successfully', voterID:voteData.id };
  } catch (error) {
    console.error('Error in validateVideo:', error);
    throw new Error('Internal Server Error');
  }
}

