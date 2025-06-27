'use client';

import { useState, useEffect } from "react";
import { UserCircle2, Mail, Pencil, Save } from "lucide-react";
import { getUserInfo } from "@/app/api/auth/getUserNameServerAction";

export default function ProfilePage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [role, setRole] = useState("");
    const [profileImage, setProfileImage] = useState("/profile-placeholder.png");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUserInfo();
                if (user) {
                    setUsername(user.name || "");
                    setProfileImage(user.image || "/profile-placeholder.png");
                    setEmail(user.email || "");
                    setPhoneNumber(user.phoneNumber || "");
                    setLocation(user.location || "");
                    setRole(user.role || "");
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/profileEditor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id,
                    email,
                    phoneNumber,
                    location,
                }),
            });

            if (res.ok) {
                alert("Profile updated successfully!");
                setIsEditing(false);
            } else {
                alert("Failed to update profile.");
            }
        } catch (err) {
            console.error("Update error:", err);
            console.log("An error occurred while updating the profile. Please try again later.",email, phoneNumber, location);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center space-x-6 mb-6 bg-gray-100 rounded p-6">
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt="User Profile"
                            className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
                        />
                    ) : (
                        <UserCircle2 className="w-20 h-20 text-gray-400" />
                    )}
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800">{username}</h1>
                        <p className="text-gray-500 capitalize">{role}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        {isEditing ? (
                            <input
                                className="mt-1 p-2 w-full border rounded"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        ) : (
                            <div className="mt-1 p-2 bg-gray-100 rounded text-gray-800 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                {email || "N/A"}
                            </div>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm text-gray-600">Phone</label>
                        {isEditing ? (
                            <input
                                className="mt-1 p-2 w-full border rounded"
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        ) : (
                            <div className="mt-1 p-2 bg-gray-100 rounded text-gray-800">
                                {phoneNumber || "Not provided"}
                            </div>
                        )}
                    </div>

                    {/* Location */}
                    <div>
                        <label className="text-sm text-gray-600">Location</label>
                        {isEditing ? (
                            <input
                                className="mt-1 p-2 w-full border rounded"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        ) : (
                            <div className="mt-1 p-2 bg-gray-100 rounded text-gray-800">
                                {location || "Unknown"}
                            </div>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end">
                    {isEditing ? (
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                        >
                            <Save className="w-4 h-4" />
                            Save Changes
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                        >
                            <Pencil className="w-4 h-4" />
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
