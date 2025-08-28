"use client";

import { getUserInfo } from "@/app/api/auth/getUserNameServerAction";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function NewTimeSheetSelection() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select a start and end date.");
      return;
    }

    try {
      const user = await getUserInfo();
      console.log("User ID:", user?.id);
      if (!user?.id) throw new Error("User ID is null. Please ensure you are logged in.");

      const startDate = dateRange.from.toISOString().split("T")[0]; // format as YYYY-MM-DD
      const endDate = dateRange.to.toISOString().split("T")[0];

      const response = await fetch("/api/timesheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user.id, start_date: startDate, end_date: endDate }),
      });

      if (!response.ok) throw new Error("Failed to create timesheet, bad API request");

      alert("Timesheet created successfully!");
    } catch (error) {
      console.error("Failed to create timesheet:", error);
      alert("There was an error creating the timesheet.");
    }
  };

  return (
    <div className="">
      <main className="">
        <form
          className=" p-6 mx-auto text-black text-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Create New Timesheet</h1>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Select Date Range</label>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-lg border"
            />
            {dateRange?.from && dateRange?.to && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {dateRange.from.toLocaleDateString()} -{" "}
                {dateRange.to.toLocaleDateString()}
              </p>
            )}
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
