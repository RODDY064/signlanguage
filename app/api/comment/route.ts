import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { body } from 'framer-motion/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
       const session = await auth()
      const  res = await request.json()
      console.log(res)
      const { degreeOfVote , comment, voterID, videoID } = res

      if(!voterID || !videoID){
       throw new Error('An error occurred')
      }
    
     if (!degreeOfVote) {
        return NextResponse.json({ error: 'Degree of vote is required' }, { status: 400 });
      }

      const Degree = await prisma.degreeOfVote.create({
         data:{
            degree:degreeOfVote,
            userId:session?.user?.id as string,
            videoId:videoID,
            voteId:voterID,
            comment:comment
         }
      })
      
    return NextResponse.json({ message: 'Form submitted successfully' },{ status:200});
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ error: 'An error occurred while submitting the form' }, { status: 500 });  
    }
}