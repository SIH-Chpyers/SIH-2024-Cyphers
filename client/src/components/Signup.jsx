import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [IsRegisteringIn, setIsRegisteringIn] = useState(false);

    async function submit(e) {
        e.preventDefault();

        setIsRegisteringIn(true);

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post("https://mongo-connection-2l3w.onrender.com/signup", {
                username, email, password, confirmPassword
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else if (res.data === "notexist") {
                        setRegistrationStatus("You have been registered successfully!");
                        setTimeout(() => {
                            navigate("/login", { state: { id: username } });
                        }, 2500);
                    } else if (res.data === "password_mismatch") {
                        alert("Passwords do not match");
                    } else {
                        alert("Error occurred. Please try again.");
                    }
                })
                .catch(e => {
                    alert("An error occurred. Please try again.");
                    console.log(e);

                });
        } catch (e) {
            console.log(e);

        }
        finally {
            setIsRegisteringIn(false);
        }
    }

    return (
        <div><br></br><br></br><br></br>
            <div className="register-form-container">
                <form onSubmit={submit} className="register-form">
                    <h2 className='register-title'>Signup to BrightWays</h2>
                    <input
                        type="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="register-input-username"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="register-input-email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="register-input-password"
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        className="register-input-confirm-password"
                    />
                    <button type="submit" className="register-button">
                        {IsRegisteringIn ? "Registering..." : "Register"}
                    </button>
                    {registrationStatus && <p className="registration-success-message">{registrationStatus}</p>}
                    <div className="register-social-signup">
                        <p className="register-social-signup-text">May also signup with</p><br />
                        <div className="register-social-signup-link">
                            <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="Google" />
                            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="GitHub" />
                            <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-k7c74t1i.png" alt="LinkedIn" />
                        </div>
                    </div>
                    <div className="register-login-link">
                        <p className="register-new-user-text">Already have an account?</p>
                        <button type="button" className="register-login-button" onClick={() => navigate('/login')}>Login Now</button>
                    </div>
                </form>
            </div></div>
    );
};

export default Signup;