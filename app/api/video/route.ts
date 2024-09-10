import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await auth()
    const formData = await request.formData();
    
    const description = formData.get('description') as string;
    const vote = formData.get('vote') as string;
    const video = formData.get('video') as File | null;
    const id  = formData.get('id') as string | null
    
    console.log(description, vote, video, id)

    if(!id || !description || !vote){
      throw new Error('An error occurred.Please try again')
    }

    const [videoData, voteData] = await prisma.$transaction([
        prisma.video.update({
          where: {
            id: id,
          },
          data: {
            description: description,
          },
        }),
        prisma.vote.create({
          data: {
            userId: session?.user?.id as string,
            videoId: id,
            voteType: vote,
          },
        }),
      ]);

    //   console.log(videoData, voteData);

      if(!videoData || !voteData){
        return NextResponse.json({ error: 'An error occurred. Please try again' }, { status: 500 });
      }

    // Respond with success
    return NextResponse.json({ message: 'Form submitted successfully' },{ status:200});
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
