'use client';

import { useState } from 'react';

export default function Export() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);

    const handleExport = async () => {

    };

    return (
        <div className="p-6">
            

            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-black">
                <header className="bg-white p-6 rounded-2xl text-center text-3xl font-bold">
                    Export your hours below
                </header>

                <form
                    onSubmit={(e) => { e.preventDefault(); handleExport(); }}
                    className="flex flex-col space-y-4 mt-4"
                >
                    <label>Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="rounded-xl p-2 border border-gray-300 bg-white"
                        required
                    />

                    <label>End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="rounded-xl p-2 border border-gray-300 bg-white"
                        required
                    />

                    <button
                        type="submit"
                        disabled={isDownloading}
                        className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 mt-4"
                    >
                        {isDownloading ? 'Exporting...' : 'Download CSV'}
                    </button>
                </form>
            </div>
        </div>
    );
}
