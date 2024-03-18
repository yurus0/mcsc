import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as any,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as any,
        }),
    ],
});

export { handler as GET, handler as POST };
