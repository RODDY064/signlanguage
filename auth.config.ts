import { AuthError, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
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
      authorize: async (
        credentials: Partial<Record<"username" | "password", unknown>>
      ) => {
        let user = null;
        // Find user by username and password
        user = await prisma.user.findFirst({
          where: {
            email: credentials.username as string,
          },
        });

        // compare password
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user?.password as string
        );

        if (!isValid) {
          throw new AuthError("Invalid username or password", {
            type: "CredentialsSignin",
          });
        }

        if (!user) {
          throw new AuthError("Invalid username or password", {
            type: "CredentialsSignin",
          });
        }
        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if(user){
        token.id = user.id

      }
      // console.log(token,'token')
      return token;
    },
    async session({ session, token, trigger }) {
      if(token){
        session.user.id = token.id as string
      }
      // console.log(session,'session')
      return session;
    },
  },
} as NextAuthConfig; // Add type assertion
