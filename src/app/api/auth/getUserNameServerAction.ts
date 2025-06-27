"use server";

import { auth } from "@/auth"

export const  getUserInfo = async () => {
    const session = await auth();

    if (session) {

        return {
            name: session.user?.name,
            image: session.user?.image,
            role: session.user?.role, 
            email: session.user?.email,
            phoneNumber: session.user?.phoneNumber,
            location: session.user?.location,
            
            
        };
    }
    return null;
}

export const getUserId = async (): Promise<number | null> => {
    const session = await auth();
    if (session) {
        const id = session.user?.id;
        if (id !== undefined && id !== null) {
            return Number(id); // safely convert to number
        }
    }
    return null;
};
