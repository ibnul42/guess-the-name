import React from 'react';
import '../Header/Header.css';
import image from '../../images/think.png'

const Header = () => {
    return (
        <div className="head-container">
            <img 
                src={image} 
                alt="header image"
                className="head-image"
            />
            <h1 className="head-text">Name it</h1>
        </div>
    );
};

export default Header;