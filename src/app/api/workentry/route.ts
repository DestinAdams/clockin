//app/api/workentry/route.ts
import { NextResponse } from "next/server";
import { addWorkEntry } from "@/app/lib/data";
import { getWorkEntries } from "@/app/lib/data";

export async function POST(req: Request) {
    try {
        const { user_id, work_date, description, hours_worked } = await req.json();
        await addWorkEntry(user_id, new Date(work_date), description, hours_worked)
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}


