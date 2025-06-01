
import NextAuth from "next-auth"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
import Google from "next-auth/providers/google"


// *DO NOT* create a `Pool` here, outside the request handler.

export const { handlers, auth, signIn, signOut } = NextAuth(() => {

    let { DATABASE_URL: connectionString, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } = process.env
    if (!connectionString || !AUTH_GOOGLE_ID || !AUTH_GOOGLE_SECRET) {
        throw new Error("Auth incorrect, missing env var");
    }

    // Create a `Pool` inside the request handler.
    const pool = new Pool({ connectionString })

    return {
        adapter: NeonAdapter(pool),
        providers: [Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET })],
    }
}) 
