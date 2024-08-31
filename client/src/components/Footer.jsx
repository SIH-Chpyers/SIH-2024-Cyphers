import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="footer-img" src="https://res.cloudinary.com/dlhktanwi/image/upload/v1725003214/tb1awqu5iv3ry4v4smvn.png" alt="EduGuru Academy" /> {/* Replace with your logo path */}
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Contact us</h3>
                        <p>brightwayscontact@gmail.com</p>
                        <p>Govind Dairy , In Front Of Sarvodya Inter College, Chaumuhan </p>
                        <p>Mathura</p>
                        <p>Uttar Pradesh 281406</p>
                    </div>
                    <div className="footer-section">
                        <h3>Home</h3>
                        <p>Become a tutor</p>
                        <p>Policy</p>
                        <p>Terms and condition</p>
                        <p>About Us</p>
                    </div>
                    <div className="footer-section social">
                        <h3>Follow us on</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    BrightWays is a subsidiary of KNSYVICA Global Education Pvt. Ltd<br />
                    Copyright©2023 mojsenie. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
