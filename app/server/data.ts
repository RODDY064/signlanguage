"use server";

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Video {
  id: string;
  video_name: string;
  video_url: string;
  description?: string | null;
  final_gross?: string | null;
  createdAt: Date;
  updatedAt: Date;
  votes?: any;
}

export async function getSignData({
  pagination,
  typeReturn,
}: {
  pagination: number;
  typeReturn: "contain" | "not contain";
}) {
  try {
    const session = await auth();
    const pageSize = 21;
    const totalCount =
      typeReturn === "not contain"
        ? await prisma.video.count({
            where: {
              votes: {
                none: {
                  userId: session?.user?.id,
                },
              },
            },
          })
        : await prisma.video.count({
            where: {
              votes: {
                some: {
                  userId: session?.user?.id,
                },
              },
            },
          });

    const totalPages = Math.ceil(totalCount / pageSize);
    const skip = (pagination - 1) * pageSize;

    let videoData;

    if (typeReturn === "not contain") {
      videoData = await prisma.video.findMany({
        skip: skip,
        take: pageSize,
        where: {
          votes: {
            none: {
              userId: session?.user?.id,
            },
          },
        },
      });
    } else {
      videoData = await prisma.video.findMany({
        skip: skip,
        take: pageSize,
        where: {
          votes: {
            some: {
              userId: session?.user?.id,
            },
          },
        },
        include: {
          votes: {
            select: {
              voteType: true,
            },
          },
        },
      });
    }

    if (!videoData) {
      throw new Error("Fail to fetch data");
    }

    return {
      pages: totalPages,
      count: totalCount,
      data: videoData,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get similar data

export async function getSimilarData(currentItemID: string) {
  try {
    const session = await auth();
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
      throw new Error("Fail to fetch data");
    }

    return similarData;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get api data by id

export async function getSignDataById(videoId: string) {
  try {
    const videoData = await prisma.video.findFirst({
      where: {
        id: videoId,
      },
    });
    if (!videoData) {
      throw new Error("Fail to fetch data");
    }
    // console.log(videoData)
    return videoData;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get user stats

export async function getUserStats() {
  try {
    const session = await auth();
    const userStats = await prisma.video.findMany({
      where: {
        votes: {
          some: {
            userId: session?.user?.id,
          },
        },
      },
      include: {
        votes: {
          select: {
            voteType: true,
          },
        },
      },
    });

    if (!userStats) {
      throw new Error("Fail to fetch data");
    }

    // calculate the total votes and number correct and wrong votes
    const totalVotes = userStats.length;
    const correctVotes = userStats.filter(
      (video) => video.votes[0].voteType === "correct"
    ).length;
    const wrongVotes = userStats.filter(
      (video) => video.votes[0].voteType === "wrong"
    ).length;

    //percentage of correct and wrong votes
    const correctPercentage = totalVotes ? (correctVotes / totalVotes) * 100 : 0;
    const wrongPercentage = totalVotes ? (wrongVotes / totalVotes) * 100 : 0;
    // console.log(totalVotes, correctVotes, wrongVotes);
    // console.log(correctPercentage, wrongPercentage);

    return {
      totalVotes,
      correctPercentage,
      wrongPercentage,
    }

  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}
