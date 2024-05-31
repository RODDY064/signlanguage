import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();



export default {
  providers: [
    GoogleProvider,
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials: Partial<Record<"username" | "password", unknown>>) => {
        let user = null
        // Find user by username and password       
        user = await prisma.user.findUnique({
          where: {
            email: credentials.username as string,
          },
        });

        if(user){
          const passwordMatch = await bcrypt.compare(credentials.password as string, user.password as string) 
          if(!passwordMatch){
            throw new Error('Invalid username or password. Please try again.')
           } }
    
        if (!user) {
          throw new Error('Invalid username or password. Please try again.')
        }
 
        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
} as NextAuthConfig; // Add type assertion
