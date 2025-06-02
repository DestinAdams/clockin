'use client';
import { useState, useEffect } from "react";
import { getUserName } from "../api/auth/getUserNameServerAction";

export default function Menu() {
    const [username, setUserName] = useState("");
    const [profileImage, setProfileImage] = useState("/profile-placeholder.png");

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user = await getUserName();
            if (user) {
                setUserName(user.name ?? "");
                if (user.image) {
                    setProfileImage(user.image);
                }
            }
        };
        fetchUserInfo();
    }, []);

    return (
        <header className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    {/* You can put navigation here */}
                </div>

                <div className="flex flex-col items-center text-right">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mb-1 border-2 border-black "
                    />
                    <h1 className="text-sm text-gray-700">
                        {username ? `Welcome back, ${username}` : "Welcome back"}
                    </h1>
                </div>
            </div>
        </header>
    );
}
