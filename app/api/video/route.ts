import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
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

    console.log(description, vote, video, id);

    if (!id || !description || !vote) {
      throw new Error('An error occurred. Please try again');
    }

    // Upload the video to the external API using the id as the video name
    const videoId = await uploadVideoToExternalAPI(video, id);

    if (!videoId) {
      return NextResponse.json({ error: 'Error uploading video to external API' }, { status: 500 });
    }

    // Update the video description and vote in the database
    const [videoData, voteData] = await prisma.$transaction([
      prisma.video.update({
        where: {
          id: id, // The id of the video being updated
        },
        data: {
          video_name: videoId, // Use the video ID as the new video description
        },
      }),
      prisma.vote.update({
        where: {
          userId_videoId: {
            userId: session?.user?.id as string,
            videoId: id,
          },
        },
        data: {
          voteType: vote,
        },
      }),
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

  return new Promise(async (resolve, reject) => {
    try {
      if (!video) {
        throw new Error('No video file provided');
      }
  
      // Read the video file
      const data = await video.arrayBuffer();
  
      // Create a FormData and append the video file and additional data
      const formData = new FormData();
      formData.append('file', new Blob([data], { type: 'video/mp4' }), video.name);
      formData.append('name', id); // Use the id as the video name
  
      // Send the video to another API
      const response = await fetch('https://videos.vskuul.com/api/files', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        return reject(result.message || 'Error uploading video to another API');
      }
  
      // Return the video ID
      resolve(result.videoId);
    } catch (error) {
      console.error('Error uploading video to another API:', error);
      reject('Internal Server Error');
    }
  });
};

export default uploadVideoToExternalAPI;