import { User } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

declare module 'next-auth' {
    interface Session {
<<<<<<< HEAD
    user: {
=======
      user: {
>>>>>>> c870c86c (configurer le system des tickets)
        login: string;
        name: string;
        image: string;
        email: string;
<<<<<<< HEAD
         // Add other custom properties if needed
    };
    accessToken: string; // Add access token property
    }
}

declare module 'next-auth' {
=======
        // Add other custom properties if needed
      };
      accessToken: string; // Add access token property
    }
  }

  declare module 'next-auth' {
>>>>>>> c870c86c (configurer le system des tickets)
    interface User {
        login: string;
        name: string;
        image: string;
        email: string;
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> c870c86c (configurer le system des tickets)

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as any,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as any,
        }),
    ],
    callbacks: {
<<<<<<< HEAD
        async session({ session, token, user }:{session: any, token: any, user: any}) {
            session.accessToken = token.accessToken;

         //   console.log(session);
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
        if (account) {
            token.accessToken = account.access_token;
             // console.log(token)
        }
        else{
            console.log("ERRROR")
        }
        return token;
        },
    },
=======
        async session({ session, token, user }) {
          session.accessToken = token.accessToken;
        
        //   console.log(session);
          return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          if (account) {
            token.accessToken = account.access_token;
            // console.log(token)
          }
          else{
            console.log("ERRROR")
          }
          return token;
        },
      },
>>>>>>> c870c86c (configurer le system des tickets)
});

export { handler as GET, handler as POST };
