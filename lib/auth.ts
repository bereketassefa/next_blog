import NextAuth from "next-auth"

import GitHub from "next-auth/providers/github"

import { NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export const config = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth',
    
  },
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    GitHub,
  ],
  callbacks: {
    authorized({ request, auth }) {
      
      const { pathname } = request.nextUrl
      if (pathname === "/write") return !!auth
      return true
    },
    // async jwt({user , token}){
    //   if(user){
    //     token.id = user.id
    //   }
    //   return token
    // },
    // async session({session , token}){
    //   // session.user?.id 
    //   if(session.user){
    //     session.user.id = token.id as string
    //   }
    //   return session
    // }
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)