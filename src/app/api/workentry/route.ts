//app/api/workentry/route.ts
import { NextRequest, NextResponse } from "next/server";
import { addWorkEntry } from "@/app/lib/data";
import { deleteWorkEntry } from "@/app/lib/data";

export async function POST(req: NextRequest) {
    try {
        const { user_id, work_date, description, hours_worked } = await req.json();
        await addWorkEntry(user_id, new Date(work_date), description, hours_worked)
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { entry_id } = await req.json();
        await deleteWorkEntry(entry_id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });

    }
}