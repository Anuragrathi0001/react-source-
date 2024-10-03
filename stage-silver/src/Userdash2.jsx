import React from 'react';

const Userdash= () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">My Profile</h2>

            {/* Personal Information */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
            </div>

            {/* Orders */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">My Orders</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Order #123456 - <span className="text-green-600">Delivered</span></li>
                    <li>Order #234567 - <span className="text-yellow-500">Shipped</span></li>
                    <li>Order #345678 - <span className="text-blue-500">In Transit</span></li>
                </ul>
            </div>

            {/* Address Book */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Saved Addresses</h3>
                <p><strong>Home:</strong> 123 Main St, City, Country</p>
                <p><strong>Office:</strong> 456 Work Rd, City, Country</p>
            </div>

            {/* Account Settings */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h3>
                <div className="space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        Change Password
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        Manage Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Userdash;
