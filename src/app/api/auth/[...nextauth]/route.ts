import { handlers } from "@/auth";
export const runtime = "nodejs"; // required for Google + PKCE
export const { GET, POST } = handlers;
