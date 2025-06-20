'use client';

import { useState, useEffect, useRef } from "react";
import { getUserInfo } from "../api/auth/getUserNameServerAction";
import { ChevronDown, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Menu() {
    const [username, setUsername] = useState("");
    const [profileImage, setProfileImage] = useState("/profile-placeholder.png");
    const [userRole, setUserRole] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        (async () => {
            const user = await getUserInfo();
            if (user) {
                setUsername(user.name ?? "");
                if (user.image) setProfileImage(user.image);
                if (user.role) setUserRole(user.role);
            }
        })();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !(menuRef.current as any).contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                <nav>{/* Optional nav links */}</nav>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col items-center focus:outline-none"
                    >
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-black mb-1"
                        />
                        <span className="text-sm text-gray-700 font-medium text-center">
                                <>
                                    Welcome back,<br />
                                    {username}
                                    {userRole && <span className="flex flex-col center text-xs text-blue-500"> ({userRole})</span>}

                                </>
                        </span>
                        <ChevronDown
                            className={`h-4 w-4 text-gray-500 mt-1 transition-transform ${menuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-20">
                            <ul className="py-2 text-sm text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                    <User className="w-4 h-4" />
                                    <span>Profile</span>
                                </li>
                                <li
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
