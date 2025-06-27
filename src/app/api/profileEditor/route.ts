
import { NextRequest, NextResponse } from 'next/server';
import { updateProfile } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    try {
        const { user_id, email, phoneNumber, location } = await req.json();
        await updateProfile(user_id, email, phoneNumber, location);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}
