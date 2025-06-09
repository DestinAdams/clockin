"use server";

import { auth } from "@/auth"

export const getUserInfo = async () => {
    const session = await auth();

    if (session) {

        return {
            name: session.user?.name,
            image: session.user?.image,
        };
    }
    return null;
}

export const getUserId = async () => {
    const session = await auth();
    if (session) {
        return {
            userId: session.user?.id
        };
    }
    return null;
}