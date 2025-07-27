import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const { DATABASE_URL, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } = process.env;

  if (!DATABASE_URL || !AUTH_GOOGLE_ID || !AUTH_GOOGLE_SECRET) {
    throw new Error("Missing required env vars");
  }

  const pool = new Pool({ connectionString: DATABASE_URL });

  return {
    adapter: NeonAdapter(pool), 
    providers: [
      Google({
        clientId: AUTH_GOOGLE_ID,
        clientSecret: AUTH_GOOGLE_SECRET,
        checks: [], // optional strict enforcement
      }),
    ],
    debug: false,
  };
});
