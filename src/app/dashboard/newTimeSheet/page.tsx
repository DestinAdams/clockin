'use client';
import { getUserId } from "@/app/api/auth/getUserNameServerAction";
import { useState } from "react";

export default function NewTimeSheet() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user_id = await getUserId() as number;
            console.log("User ID:", user_id);
            if (!user_id) throw new Error("User ID is null. Please ensure you are logged in.");

            const response = await fetch('/api/timesheet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id, start_date: startDate, end_date: endDate }),
            });

            if (!response.ok) throw new Error("Failed to create timesheet, bad API request");

            alert("Timesheet created successfully!");
        } catch (error) {
            console.error("Failed to create timesheet:", error);
            alert("There was an error creating the timesheet.");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="space-y-6 p-6">
                <form
                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-2xl font-bold mb-4">Create New Timesheet</h1>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Start Date</label>
                        <input
                            type="date"
                            name="start_date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">End Date</label>
                        <input
                            type="date"
                            name="end_date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Create Timesheet
                    </button>
                </form>
            </main>
        </div>
    );
}
