
import { NextRequest, NextResponse } from 'next/server';
import { updateProfile } from '@/app/lib/data';

export async function POST(req: NextRequest) {
    try {
        const { id, email, phoneNumber, location } = await req.json();
        await updateProfile(id, email, phoneNumber, location);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}
