import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import KakaoProvider from "next-auth/providers/kakao";
import mongoClient from "@/lib/mongoClient";
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(mongoClient) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});

export { handler as GET, handler as POST };
