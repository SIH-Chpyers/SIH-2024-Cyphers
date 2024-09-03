import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loading from './Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggingIn, setIsLoggingIn] = useState(false); // New state for button loading

    async function submit(e) {
        e.preventDefault();

        setIsLoggingIn(true); // Set loading state

        try {
            await axios.post("https://mongo-connection-2l3w.onrender.com/", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        navigate("/home", { state: { id: email } });
                    } else if (res.data === "notexist") {
                        alert("User has not signed up");
                    } else if (res.data === "incorrect_password") {
                        alert("Incorrect password");
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
        } finally {
            setIsLoggingIn(false);
        }
    }

    const guestLogin = () => {
        const guestUsername = "guestid@gmail.com";
        const guestPassword = "Guestpass@00";

        setEmail(guestUsername);
        setPassword(guestPassword);

        handleSubmit(new Event('submit'));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div><br></br><br></br><br></br>
            <div className="form-container">
                <form onSubmit={submit} className="login-form">
                    <h2 className='login-title'>Login to BrightWays</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="login-input-user"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="login-input-password"
                    />

                    <button type="submit" className="login-button">
                        {isLoggingIn ? "Logging in..." : "Login"}
                    </button>
                    <div className="login-forgot-password" onClick={() => navigate('/na')}>Forgot password ?</div>
                    <div className="login-signup">
                        <p className="login-new-user-text">New user ?</p>
                        <button type="button" onClick={() => navigate('/signup')} className="login-signup-button">Signup Now</button>
                    </div>
                    <div className="login-social-signup">
                        <p className="login-social-signup-text">May also signup with</p>
                        <a href="https://accounts.google.com/signup" target="_blank" className="login-social-signup-link">
                            <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="Google" className="login-social-signup-icon" />
                        </a>
                        <a href="https://github.com/join" target="_blank" className="login-social-signup-link">
                            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="GitHub" className="login-social-signup-icon" />
                        </a>
                        <a href="https://www.linkedin.com/signup" target="_blank" className="login-social-signup-link">
                            <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-k7c74t1i.png" alt="LinkedIn" className="login-social-signup-icon" />
                        </a>
                    </div>
                    <button type="button" onClick={guestLogin} className="login-signup-button" id="guest-btn">Guest</button>
                </form>
            </div>
        </div>
    );
};

export default Login;