"use server";

import { auth } from "@/auth"

export const getUserName = async () => {
    const session = await auth();
    if (session) {

        return {
            name: session.user?.name,
            image: session.user?.image,
        };
    }
    return null;
}