import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(){
    try {
      const session = await auth()

      const count =   await prisma.video.count({
        where: {
          votes: {
            some: {
              userId: session?.user?.id,
            },
          },
        },
      });

     const  videoData = await prisma.video.findMany({
        where: {
          votes: {
            some: {
              userId: session?.user?.id,
            },
          },
        },
        include: {
          votes: {
            where: {
              userId: session?.user?.id,
            },
            select: {
              voteType: true,
            },
          },
        },
      });


       const totalPages = Math.ceil(count / 21);
        
        return NextResponse.json({ 
        pages: totalPages,
        count,
        data: videoData,
        }, { status: 200 });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
    
}
