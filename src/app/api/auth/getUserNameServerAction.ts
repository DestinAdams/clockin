'use server';

import { auth } from "@/auth"
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const getUserInfo = async () => {
    const session = await auth();

    if (session?.user?.id) {
        const userId = Number(session.user.id);

        // Query your users table
        const result = await sql`
            SELECT role, "phoneNumber", location
            FROM users
            WHERE id = ${userId}
        `;

        const user = result[0];

        return {
            id: userId,
            name: session.user.name,
            image: session.user.image,
            email: session.user.email,
            role: user?.role ?? null,
            phoneNumber: user?.phoneNumber ?? null,
            location: user?.location ?? null,
        };
    }

    return null;
};