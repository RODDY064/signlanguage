import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try {

        const session = await auth();

        const request = await req.json();
        const currentItemID = request.id;

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
                      userId: session?.user?.id,
                    },
                  },
                },
              ],
            },
          });
        
        if (!similarData) {
            return NextResponse.json({ error: 'Fail to fatch data' }, { status: 500 });
        }

        return NextResponse.json({ data: similarData }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}