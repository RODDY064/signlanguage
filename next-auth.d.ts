import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    emailVerified?: Date | null;
    total_votes: number;
    correctness: number;
    wrongness: number;
  }

  interface Session {
    user: {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
      email: string;
      total_votes: number;
      correctness: number;
      wrongness: number;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;

  }
}
