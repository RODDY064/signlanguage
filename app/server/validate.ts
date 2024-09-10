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

const SignDataSchema = z.object({
  users_voted: z.array(z.object({email: z.string().optional(),type: z.string().optional()})).optional().nullable(),
  total_votes: z.number().nonnegative().optional().nullable(),
  correctness_votes: z.number().nonnegative().optional().nullable(),
  wrongness_votes: z.number().nonnegative().optional().nullable(),
});

type ValidateType = z.infer<typeof ValidateTypeSchema>;
type SignData = z.infer<typeof SignDataSchema>;



export async function validateVideo(input: ValidateType) {
  try {
    const { videoId , type } = input;
    const session  = await auth()
    const votedAlready = await prisma.video.findFirst({
      where:{
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

    console.log(votedAlready?.votes[0]?.voteType)

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

    console.log(voteData)

    console.log('Data updated successfully');
    return { status: 200, message: 'Data updated successfully' };
  } catch (error) {
    console.error('Error in validateVideo:', error);
    throw new Error('Internal Server Error');
  }
}
