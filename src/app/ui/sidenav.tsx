    'use client';

    import Link from 'next/link';
    import { useState } from 'react';
    import { Menu, X, LayoutDashboard, CirclePlus, History, House, BoxIcon, Download } from 'lucide-react';


    function SideNav() {
        const [isCollapsed, setIsCollapsed] = useState(false);

        return (
            <div className={`h-screen ${isCollapsed ? 'w-16' : 'w-60'} transition-all duration-300`}>
                <nav className="h-full flex flex-col justify-between bg-white border-r shadow-sm rounded">
                    {/* Top section */}
                    <div>
                        <div className="flex items-center justify-between p-4">
                            {!isCollapsed && (
                                <h1 className="text-blue-600 font-bold text-lg whitespace-nowrap transition">ClockIn</h1>
                            )}
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                            >
                                {isCollapsed ? <Menu size={25} color='black' /> : <X size={25} color='black' />}
                            </button>
                        </div>

                        {/* Navigation links */}
                        <ul className="flex flex-col p-4 gap-4">

                            <Link
                                href="/dashboard"

                                className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                            >
                                <div>
                                    <LayoutDashboard size={20} color='black' />
                                </div>
                                <div>{!isCollapsed && <span>Dashboard</span>}</div>

                            </Link>

                            <Link
                                href="/dashboard/new-entry"


                                className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                            >
                                <div>
                                    <CirclePlus size={20} color='black' />
                                </div>
                                <div>{!isCollapsed && <span>New Entry</span>}</div>

                            </Link>


                            <Link
                                href="/dashboard/history"
                                className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                            >
                                <div><History size={20} color='black' /></div>

                                {!isCollapsed && <span>History</span>}
                            </Link>
                            <Link
                                href="/dashboard/export"


                                className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                            >
                                <div>
                                    <Download size={20} color='black' />
                                </div>
                                <div>{!isCollapsed && <span>Export</span>}</div>

                            </Link>
                        </ul>
                    </div>

                    {/* Bottom section */}
                    <div className="p-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 border text-gray-700 hover:text-blue-600"
                        >
                            <div><House size={20} color='black' /></div>

                            {!isCollapsed && <span>Home</span>}
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }

    export default SideNav;
