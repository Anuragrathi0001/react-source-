import React, { useState } from 'react';
import './Handleform.css';

export default function HandleForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        issubscribed: false,
        role: ''
    });

    const HandleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: fieldValue
        });
    }
   const handleSubmit = (event) => {
        event.preventDefault();
       console.log("formdata", formData);//is formdata ke andar sara data hai!! that is a object 
    }

    return (
        <div>
            <div className="outer-box">
                <div className="inner-box">
                    <header id="signup">
                        <h1>Signup</h1>
                        <p>It just takes 30 seconds</p>
                    </header>
                    <main className="signup-body">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label htmlFor="fullname">Username</label>
                                <input type="text" id="username" placeholder="Username" name="username" value={formData.username} onChange={HandleChange} required />
                            </p>
                            <p>
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" placeholder="abc@gmail.com" name="email" value={formData.email} onChange={HandleChange} required />
                            </p>
                            <p>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="at least 8 characters" name="password" value={formData.password} onChange={HandleChange} required />
                            </p>
                            <p>
                                <label htmlFor="issubsribed">Subscribe:</label>
                                <input type="checkbox" id="issubscribed" name="issubscribed" checked={formData.issubscribed} onChange={HandleChange} />
                            </p>
                            <p>
                                <label htmlFor="role">Role</label>
                                <select id="role" name="role" value={formData.role} onChange={HandleChange}>
                                    <option value="" disabled>Select role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="guest">Guest</option>
                                </select>
                            </p>
                            <p>
                                <input type="submit" id="submit" value="Create Account" />
                            </p>
                        </form>
                    </main>
                    <footer className="signup-footer">
                        {/* <p>Already have an Account? <a>Login</a></p> */}
                    </footer>
                </div>
                <div className="circle c1"></div>
                <div className="circle c2"></div>
            </div>
        </div>
    );
}

  