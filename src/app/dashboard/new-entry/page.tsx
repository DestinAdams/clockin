'use client';

import { addWorkEntry } from "@/app/lib/data";

export default function NewEntry() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const startDate = formData.get('startDate') as string | null;
        const endDate = formData.get('endDate') as string | null;
        const hoursWorkedStr = formData.get('hoursWorked') as string;
        const hoursWorked = parseFloat(hoursWorkedStr);
        const description = formData.get('description') as string | null;

        try {
            console.log("Submitting entry:", {
                startDate,
                endDate,
                hoursWorked,
                description
            });
            // await addWorkEntry(startDate, endDate, hoursWorked, description);
            alert("Entry submitted successfully!");
            e.target.reset(); // Clear the form
        } catch (error) {
            console.error("Failed to submit entry:", error);
            alert("There was an error submitting the entry.");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="p-6">
                <form
                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black"
                    onSubmit={handleSubmit}
                >
                    <label>Week Day Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        required
                    />

                    <label>Week Day End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        required

                    />

                    <label>Hours Worked</label>
                    <input
                        type="number"
                        name="hoursWorked"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        min="0"
                        step="0.1"
                        required
                    />

                    <label>Description</label>
                    <textarea
                        name="description"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        rows={4}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit Entry
                    </button>
                </form>
            </main>
        </div>
    );
}
