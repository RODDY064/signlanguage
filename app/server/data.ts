"use server"

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// In-memory cache
const cache: { [key: string]: any } = {};

export interface Video {
  id: string;
  video_name: string;
  video_url: string;
  description?: string | null;
  new_video_name?: string | null;
  final_gross?: string | null;
  createdAt: Date;
  updatedAt: Date;
  votes?: any;
}

const CACHE_EXPIRATION_TIME = 60 * 1000; // 1 minute

function setCache(key: string, data: any) {
  cache[key] = {
    data,
    expiration: Date.now() + CACHE_EXPIRATION_TIME,
  };
}

function getCache(key: string) {
  const cached = cache[key];
  if (cached && cached.expiration > Date.now()) {
    return cached.data;
  }
  return null;
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
    const cacheKey = `getSignData-${pagination}-${typeReturn}-${session?.user?.id}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

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

    let videoData;

    if (typeReturn === "not contain") {
      videoData = await prisma.video.findMany({
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
    }

    if (!videoData) {
      throw new Error("Fail to fetch data");
    }

    const result = {
      pages: totalPages,
      count: totalCount,
      data: videoData,
    };

    setCache(cacheKey, result);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

export async function getSignDataNotContain() {
  try {
    const session = await auth();
    const cacheKey = `getSignDataNotContain-${session?.user?.id}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const count = await prisma.video.count({
      where: {
        votes: {
          none: {
            userId: session?.user?.id,
          },
        },
      },
    });

    const videoData = await prisma.video.findMany({
      where: {
        votes: {
          none: {
            userId: session?.user?.id,
          },
        },
      },
    });

    const totalPages = Math.ceil(count / 21);

    const result = {
      pages: totalPages,
      count,
      data: videoData,
    };

    setCache(cacheKey, result);

    return result;
  } catch (error) {
    console.error("Fail to fetch data:", error);
    throw new Error("Fail to fetch data");
  }
}

export async function getSignDataContain() {
  try {
    const session = await auth();
    const cacheKey = `getSignDataContain-${session?.user?.id}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const count = await prisma.video.count({
      where: {
        votes: {
          none: {
            userId: session?.user?.id,
          },
        },
      },
    });

    const videoData = await prisma.video.findMany({
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

    const result = {
      pages: totalPages,
      count,
      data: videoData,
    };

    setCache(cacheKey, result);

    return result;
  } catch (error) {
    console.error("Fail to fetch data:", error);
    throw new Error("Fail to fetch data");
  }
}

// get similar data

export async function getSimilarData(currentItemID: string) {
  try {
    const session = await auth();
    const cacheKey = `getSimilarData-${currentItemID}-${session?.user?.id}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

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

    setCache(cacheKey, similarData);

    return similarData;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}

// get api data by id

export async function getSignDataById(videoId: string) {
  try {
    const cacheKey = `getSignDataById-${videoId}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const videoData = await prisma.video.findFirst({
      where: {
        id: videoId,
      },
    });
    if (!videoData) {
      throw new Error("Fail to fetch data");
    }

    setCache(cacheKey, videoData);

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
    const cacheKey = `getUserStats-${session?.user?.id}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return cachedData;
    }

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

    // percentage of correct and wrong votes
    const correctPercentage = totalVotes
      ? ((correctVotes / totalVotes) * 100).toFixed(2)
      : 0;
    const wrongPercentage = totalVotes
      ? ((wrongVotes / totalVotes) * 100).toFixed(2)
      : 0;

    const result = {
      totalVotes,
      correctPercentage,
      wrongPercentage,
    };

    setCache(cacheKey, result);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch data");
  }
}