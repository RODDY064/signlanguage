import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

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

const uploadVideoToExternalAPI = async (video: File | null, id: string): Promise<string | null> => {
  if (!video) {
    throw new Error('No video file provided');
  }

  // Read the video file as an ArrayBuffer
  const data = await video.arrayBuffer();

  // Create a FormData and append the video file and additional data
  const formData = new FormData();
  formData.append('file', new Blob([data], { type: video.type }), `${id}.mp4`);
  formData.append('name', id); // Use the id as the video name

  // console.log(formData.get('file'),'file');
  
  try {
    // Send the video to another API
    const response = await fetch('https://videos.vskuul.com/api/files', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log(result);

    if (!response.ok) {
      throw new Error(result.message || 'Error uploading video to another API');
    }

    // Return the video name from the response
    return result.message;
  } catch (error) {
    console.error('Error uploading video to another API:', error);
    return null;
  }
};

export { uploadVideoToExternalAPI };