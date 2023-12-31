import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/Button.css';
import { Helmet } from "react-helmet";

const BTN = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://todo-vl9r.onrender.com/login`, formData);
            console.log(response);

            if (response.data === "Invalid Username or Password") {
                setErrorMessage("Invalid User name or Password");
            } else if (response.data === "Server Busy") {
                setErrorMessage("Verify Your email id");
            } else if (response?.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify(response.data));
                setErrorMessage('');
                navigate('/home');
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <div style={{ backgroundImage: `url('/Assets/blob-scene-haikei.png')` }}>
            <Helmet>
                <title>Login-Page</title>
                <meta name="description" content="LogIn-page" />
            </Helmet>
            <div className="backgrounds">
                <div className="shapes"></div>
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Login Here</h3>
                    <label htmlFor="username">Username</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="username"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="button">Log In</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p>Do not have an account <Link to="/">Create a new one</Link></p>
                </form>
            </div>
        </div>
    )
}

export default BTN;
