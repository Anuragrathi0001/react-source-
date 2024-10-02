import React from 'react';

function Userdash() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "https://via.placeholder.com/150"
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex space-x-6">
                <UserImage image={user.image} />
                <UserDetails name={user.name} email={user.email} />
            </div>
        </div>
    );
}

// UserImage Component
const UserImage = ({ image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
                src={image}
                alt="User"
                className="rounded-full w-36 h-36 object-cover mx-auto"
            />
        </div>
    );
};

// UserDetails Component
const UserDetails = ({ name, email }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <p className="text-lg"><strong>Name:</strong> {name}</p>
            <p className="text-lg mt-2"><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Userdash;
