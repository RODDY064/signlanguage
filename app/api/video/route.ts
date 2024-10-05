import { uploadVideoToExternalAPI } from '@/app/server/videoAPI';
import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';



const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await auth();
    const formData = await request.formData();

    const description = formData.get('description') as string;
    const vote = formData.get('vote') as string;
    const video = formData.get('video') as File | null;
    const id = formData.get('id') as string | null;

    if (!id || !description || !vote) {
      throw new Error('An error occurred. Please try again');
    }

    if(video){

    const videoName = await uploadVideoToExternalAPI(video, id);
    if (!videoName) {
      return NextResponse.json({ error: 'Error uploading video to external API' }, { status: 500 });
    }

    }

    const voteExits = await prisma.vote.findUnique({
      where: {
        userId_videoId: {
          userId: session?.user?.id as string,
          videoId: id,
        },
      },
    });


    const votePrisma =  voteExits ?  prisma.vote.update({
      where: {
        userId_videoId: {
          userId: session?.user?.id as string,
          videoId: id,
        },
      },
      data: {
        voteType: vote,
      },
    }) : prisma.vote.create({
      data: {
        videoId: id,
        voteType: vote,
        userId: session?.user?.id as string,
      },
    })


  
    const [videoData, voteData] = await prisma.$transaction([
      prisma.video.update({
        where: {
          id: id, 
        },
        data: {
          new_video_name: description,
        },
      }),
      votePrisma,
    ]);

    if (!videoData || !voteData) {
      return NextResponse.json({ error: 'An error occurred. Please try again' }, { status: 500 });
    }

    // Respond with success
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

