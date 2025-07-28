// src/auth.ts

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import  NeonAdapter  from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  adapter: NeonAdapter(pool),
  secret: process.env.AUTH_SECRET,
})
