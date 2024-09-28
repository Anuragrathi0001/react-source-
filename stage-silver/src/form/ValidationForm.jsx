import React, { useState } from 'react';
import './Handleform.css';

export default function ValidationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [submitData, setSubmitData] = useState(null);

    const validateform = () => {
        let isValid = true;
        const newError = {};

        // Username validation
        if (!username.trim()) {
            newError.username = "Username is required";
            isValid = false;
        }

        // Email validation
        if (!email.trim()) {
            newError.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) { // Better regex for email validation
            newError.email = "Enter a valid email address";
            isValid = false;
        }

        // Password validation
        if (!password) {
            newError.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newError.password = "Password must be at least 6 characters";
            isValid = false;
        }

        setError(newError);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateform()) {
            const submittedData = {
                username,
                email,
                password
            }
            setSubmitData(submittedData);
            console.log("Submitted data:", submittedData);
        }
    }

    return (
        <div>
            <h1>ValidationForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                {error.username && <span className='error'>{error.username}</span>}
                <br />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                {error.email && <span className='error'>{error.email}</span>}
                <br />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                {error.password && <span className='error'>{error.password}</span>}
                <br />

                <button type="submit">Submit</button>
            </form>

            {submitData && (
                <div>
                    <h2>Submitted data:</h2>
                    <h3>Username: {submitData.username}</h3>
                    <h3>Email: {submitData.email}</h3>
                    <h3>Password: {submitData.password}</h3>
                </div>
            )}
        </div>
    );
}
