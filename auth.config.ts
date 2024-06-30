import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";






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
         
        user = await fetch(`${process.env.API_BASE_URL}/custom-user/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        }).then(async (res) => {
          if (res.ok && res.status === 200) {
             const data = await res.json()
             
            return data.user
          } else {
            return null
          }
        })
  
    
        if (!user) {
          throw new Error('User not found.')
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.email = user.email;
        token.emailVerified = user.emailVerified;
        token.total_votes = user.total_votes;
        token.correctness = user.correctness;
        token.wrongness = user.wrongness;

        // console.log('JWT callback',{user});
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          username: token.username as string,
          firstname: token.firstname as string,
          lastname: token.lastname as string,
          email: token.username as string,
          total_votes: token.total_votes as number,
          correctness: token.correctness as number,
          wrongness: token.wrongness as number,
          emailVerified: token.emailVerified as Date | null, 
        };
      }

    
      // console.log('Session callback');
      // console.log({ session, token });

      return session;
    }
  }
} as NextAuthConfig; // Add type assertion
