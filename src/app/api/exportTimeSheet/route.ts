
import { NextRequest, NextResponse } from "next/server";
import { getExportTimeSheet } from "@/app/lib/data";
export async function POST(req: NextRequest){
    try{
        const {user_id, start_date, end_date} = await req.json();
        await getExportTimeSheet(user_id, new Date(start_date), new Date(end_date));
        return NextResponse.json({ success: true, message: "Time sheet exported successfully." });
    }catch(error){
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}