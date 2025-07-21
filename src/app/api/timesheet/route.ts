import { NextRequest, NextResponse } from "next/server";
import { addTimeSheet } from "@/app/lib/data";

export async function POST(req: NextRequest) {
    try {
        const { user, start_date, end_date } = await req.json();

        await addTimeSheet(user, new Date(start_date), new Date(end_date), "Pending");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}