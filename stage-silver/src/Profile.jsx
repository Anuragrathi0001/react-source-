import React, { useState } from "react";

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState("general");

    return (
        <div className="container mx-auto p-4 ">
            <h4 className="font-bold py-3 mb-4">Account settings</h4>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <div className="list-group">
                            <a
                                href="#account-general"
                                className={`p-4 cursor-pointer ${selectedTab === "general" ? "font-bold text-gray-900" : ""
                                    }`}
                                onClick={() => setSelectedTab("general")}
                            >
                                General
                            </a>
                            <a
                                href="#account-change-password"
                                className={`p-4 cursor-pointer ${selectedTab === "change-password"
                                        ? "font-bold text-gray-900"
                                        : ""
                                    }`}
                                onClick={() => setSelectedTab("change-password")}
                            >
                                Change password
                            </a>
                            <a
                                href="#account-info"
                                className={`p-4 cursor-pointer ${selectedTab === "info" ? "font-bold text-gray-900" : ""
                                    }`}
                                onClick={() => setSelectedTab("info")}
                            >
                                Info
                            </a>
                            <a
                                href="#account-social-links"
                                className={`p-4 cursor-pointer ${selectedTab === "social-links"
                                        ? "font-bold text-gray-900"
                                        : ""
                                    }`}
                                onClick={() => setSelectedTab("social-links")}
                            >
                                Social links
                            </a>
                            <a
                                href="#account-connections"
                                className={`p-4 cursor-pointer ${selectedTab === "connections"
                                        ? "font-bold text-gray-900"
                                        : ""
                                    }`}
                                onClick={() => setSelectedTab("connections")}
                            >
                                Connections
                            </a>
                            <a
                                href="#account-notifications"
                                className={`p-4 cursor-pointer ${selectedTab === "notifications"
                                        ? "font-bold text-gray-900"
                                        : ""
                                    }`}
                                onClick={() => setSelectedTab("notifications")}
                            >
                                Notifications
                            </a>
                        </div>
                    </div>
                    <div className="col-span-9 p-4">
                        {/* General Tab */}
                        {selectedTab === "general" && (
                            <div id="account-general">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="avatar"
                                        className="w-20 h-20"
                                    />
                                    <div>
                                        <label className="btn border border-blue-500 text-blue-500 p-2 rounded cursor-pointer">
                                            Upload new photo
                                            <input
                                                type="file"
                                                className="hidden"
                                                aria-hidden="true"
                                            />
                                        </label>
                                        <button className="btn ml-2 p-2 border text-gray-600">
                                            Reset
                                        </button>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Allowed JPG, GIF, or PNG. Max size of 800KB.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-bold mb-2">Username</label>
                                    <input
                                        type="text"
                                        className="border w-full p-2 mb-4"
                                        value="nmaxwell"
                                    />
                                    <label className="block text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="border w-full p-2 mb-4"
                                        value="Nelle Maxwell"
                                    />
                                    <label className="block text-sm font-bold mb-2">E-mail</label>
                                    <input
                                        type="email"
                                        className="border w-full p-2 mb-2"
                                        value="nmaxwell@mail.com"
                                    />
                                    <div className="text-yellow-600 bg-yellow-100 p-2 mt-2">
                                        Your email is not confirmed. Please check your inbox.
                                        <a
                                            href=""
                                            className="text-blue-500 underline ml-2"
                                        >
                                            Resend confirmation
                                        </a>
                                    </div>
                                    <label className="block text-sm font-bold mb-2 mt-4">Company</label>
                                    <input
                                        type="text"
                                        className="border w-full p-2"
                                        value="Company Ltd."
                                    />
                                </div>
                            </div>
                        )}

                        {/* Change Password Tab */}
                        {selectedTab === "change-password" && (
                            <div id="account-change-password">
                                <label className="block text-sm font-bold mb-2">Current password</label>
                                <input type="password" className="border w-full p-2 mb-4" />
                                <label className="block text-sm font-bold mb-2">New password</label>
                                <input type="password" className="border w-full p-2 mb-4" />
                                <label className="block text-sm font-bold mb-2">Repeat new password</label>
                                <input type="password" className="border w-full p-2" />
                            </div>
                        )}

                        {/* Similar structure for other tabs */}
                    </div>
                </div>
                <div className="text-right p-4 bg-gray-100">
                    <button className="btn bg-blue-500 text-white p-2 rounded">
                        Save changes
                    </button>
                    <button className="btn bg-gray-500 text-white p-2 rounded ml-2">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
