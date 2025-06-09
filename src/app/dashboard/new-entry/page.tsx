'use client';
import { addWorkEntry } from "@/app/lib/data";
import { getUserId } from "@/app/api/auth/getUserNameServerAction"

export default function NewEntry() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        //     const formData = new FormData(e.currentTarget);

        //     const date = formData.get('date') as string;

        //     // ✅ Convert string to number
        //     const hoursWorked = parseFloat(formData.get('hoursWorked') as string);
        //     const description = formData.get('description') as string;

        //     try {

        //         console.log("Submitting entry:", {
        //             date,
        //             hoursWorked,
        //             description
        //         });

        //         await addWorkEntry(date, hoursWorked, description);
        //         alert("Entry submitted successfully!");
        //         e.target.reset(); // Clear the form
        //     } catch (error) {
        //         console.error("Failed to submit entry:", error);
        //         alert("There was an error submitting the entry.");
        //     }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="p-6">
                <form
                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black"
                    onSubmit={handleSubmit}
                >
                    <label>Date Worked</label>
                    <input
                        type="date"
                        name="date"
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
                        placeholder="How long did you pretend to be productive?"
                        required
                    />

                    <label>Description</label>
                    <textarea
                        name="description"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        rows={4}
                        required
                         placeholder="What heroic deeds did you accomplish today?"
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
