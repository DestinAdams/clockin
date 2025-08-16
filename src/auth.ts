// import NextAuth from "next-auth"
// import NeonAdapter from "@auth/neon-adapter"
// import { Pool } from "@neondatabase/serverless"
 
// // *DO NOT* create a `Pool` here, outside the request handler.
 
// export const { handlers, auth, signIn, signOut } = NextAuth(() => {
//   // Create a `Pool` inside the request handler.
//   const pool = new Pool({ connectionString: process.env.DATABASE_URL })
//   return {
//     adapter: NeonAdapter(pool),
//     providers: [],
//   }
// })

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless" 

export const { handlers, signIn, signOut, auth } = NextAuth( ()=> {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return{
    adapter: NeonAdapter(pool),
    providers:[Google]
  }


})
