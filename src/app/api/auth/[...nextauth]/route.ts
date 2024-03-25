import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "secret",
  },
  providers: [
    //     CredentialsProvider({
    //       name: "카카오 로그인",
    //       credentials: {
    //         username: {
    //           label: "이메일",
    //           type: "text",
    //           placeholder: "카카오계정(이메일, 전화번호)",
    //         },
    //         password: {
    //           label: "비밀번호",
    //           type: "password",
    //           placeholder: "비밀번호",
    //         },
    //       },

    //       // 로그인 유효성 검사
    //       async authorize(credentials, req) {
    //         const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             username: credentials?.username,
    //             password: credentials?.password,
    //           }),
    //         });
    //         const user = await res.json();
    //         console.log(user);

    //         if (user) {
    //           return user;
    //         } else {
    //           return null;
    //         }
    //       },
    //     }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  // JWT 콜백
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  // pages: {
  //   signIn: "/",
  // },
});

export { handler as GET, handler as POST };
