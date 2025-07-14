'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    Menu,
    X,
    LayoutDashboard,
    CirclePlus,
    History,
    House,
    Download,
    Calendar,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';

function SideNav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [entryDropdownOpen, setEntryDropdownOpen] = useState(false);
    const [timeSheetDropdownOpen, setTimeSheetDropdownOpen] = useState(false);

    return (
        <div className={`h-screen ${isCollapsed ? 'w-16' : 'w-60'} transition-all duration-300`}>
            <nav className="h-full flex flex-col justify-between bg-white border-r shadow-sm rounded">
                {/* Top section */}
                <div>
                    <div className="flex items-center justify-between p-4">
                        {!isCollapsed && (
                            <h1 className="text-blue-600 font-bold text-xl whitespace-nowrap transition">ClockIn Accontent</h1>
                        )}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                        >
                            {isCollapsed ? <Menu size={25} color="black" /> : <X size={25} color="black" />}
                        </button>
                    </div>

                    {/* Navigation links */}
                    <ul className="flex flex-col p-4 gap-2">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                        >
                            <LayoutDashboard size={20} color="black" />
                            {!isCollapsed && <span>Dashboard</span>}
                        </Link>

                        {/* New Entry Dropdown */}
                        <button
                            onClick={() => setEntryDropdownOpen(!entryDropdownOpen)}
                            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 w-full text-left"
                        >
                            <CirclePlus size={20} color="black" />
                            {!isCollapsed && (
                                <>
                                    <span className="flex-grow text-left">Entries</span>
                                    {entryDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </>
                            )}
                        </button>
                        {!isCollapsed && entryDropdownOpen && (
                            <div className="ml-6 flex flex-col gap-1 mt-1">
                                <Link
                                    href="/dashboard/newEntry"
                                    className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                                >
                                    New Entry
                                </Link>
                                <Link
                                    href="/dashboard/myEntries"
                                    className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                                >
                                    My Entries
                                </Link>
                            </div>
                        )}

                        {/* Time Sheets Dropdown */}
                        <button
                            onClick={() => setTimeSheetDropdownOpen(!timeSheetDropdownOpen)}
                            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 w-full text-left"
                        >
                            <Calendar size={20} color="black" />
                            {!isCollapsed && (
                                <>
                                    <span className="flex-grow text-left">Time Sheets</span>
                                    {timeSheetDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </>
                            )}
                        </button>
                        {!isCollapsed && timeSheetDropdownOpen && (
                            <div className="ml-6 flex flex-col gap-1 mt-1">
                                <Link
                                    href="/dashboard/timeSheet"
                                    className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                                >
                                    View Time Sheets
                                </Link>

                            </div>
                        )}


                        <Link
                            href="/dashboard/export"
                            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                        >
                            <Download size={20} color="black" />
                            {!isCollapsed && <span>Export</span>}
                        </Link>
                    </ul>
                </div>

                {/* Bottom section */}
                <div className="p-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                    >
                        <House size={20} color="black" />
                        {!isCollapsed && <span>Home</span>}
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default SideNav;
