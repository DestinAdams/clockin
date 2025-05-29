import React from 'react';

export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Dashboard</h1>
            <p className="text-lg text-gray-600 mb-8">
                Welcome to your dashboard! Here you can track your hours worked and earnings.
            </p>
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                {/* Dashboard content goes here */}
                <p className="text-gray-500">Your dashboard is currently empty.</p>
            </div>
        </div>
    );
}
