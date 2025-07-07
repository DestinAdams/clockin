'use client';
import { getUserId } from "@/app/api/auth/getUserNameServerAction";


export default function NewTimeSheet() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user_id = await getUserId() as number;
            if (!user_id) throw new Error("User ID is null. Please ensure you are logged in.");

            const response = await fetch('/api/timesheet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id }),
            });

            if (!response.ok) throw new Error("Failed to create timesheet, bad api request");

            alert("Timesheet created successfully!");
        } catch (error) {
            console.error("Failed to create timesheet:", error);
            alert("There was an error creating the timesheet.");
        }
    };
    return(
        <div className="bg-gray-100 min-h-screen">
            <main className="space-y-6 p-6">
                <form
                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-2xl font-bold mb-4">Create New Timesheet</h1>
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