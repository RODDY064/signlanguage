import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const {
    handlers : { GET , POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session:{ strategy:'jwt' },
    ...authConfig
})