'use client';
import { getUserInfo } from "@/app/api/auth/getUserNameServerAction";
export default function NewEntry() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            const user = await getUserInfo();

            if (!user?.id) throw new Error("User ID is null. Please ensure you are logged in.");
            const id = user.id as number;
            const work_date = new Date(formData.get('work_date') as string);
            const hours_worked = parseFloat(formData.get('hours_worked') as string);

            if (isNaN(hours_worked)) throw new Error("Invalid input for hours worked");

            const description = formData.get('description') as string;
            const response = await fetch('/api/workentry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, work_date, description, hours_worked }),
            });
            if (!response.ok) throw new Error("Failed to submit work entry, bad api request");

            console.log("Submitting entry:", {
                id,
                work_date,
                description,
                hours_worked,
            });



            alert("Entry submitted successfully!");
            e.preventDefault();

        } catch (error) {
            console.error("Failed to submit entry:", error);
            alert("There was an error submitting the entry.");
        }
    };


    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="space y-6 p-6">
                <form
                    className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black"
                    onSubmit={handleSubmit}
                >
                    <label className="block mb-1 font-semibold">Date Worked</label>
                    <input
                        type="date"
                        name="work_date"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        required
                    />

                    <label className="block mb-1 font-semibold">Hours Worked</label>
                    <input
                        type="number"
                        name="hours_worked"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                        min="0"
                        step="0.1"
                        placeholder="How long did you pretend to be productive?"
                        required
                    />

                    <label className="block mb-1 font-semibold">Description</label>
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
