import React, { useState, useRef } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {
    const handleRedirect = () => {
        window.location.href = '/score';
    };

    return (
        <div className="containers">
            <div className="rectangle"><Link activeClassName="active" to="/enhance">
                <button>
                    <label className="custom-file-upload">
                        <span className="button">Enhance Your Notes</span>
                    </label>
                </button></Link>

            </div>
        </div>
    );
};


export default Button;