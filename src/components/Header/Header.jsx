import React from 'react';
import '../Header/Header.css';
import image from '../../images/young-hipster.jpg'

const Header = (props) => {
    return (
        <div className="head-container">
            <img 
                src={image} 
                alt="header image"
                className={
                            `head-image ${
                                props.searchKeyword
                                    ?'head-image-contracted'
                                    :'head-image-expanded'
                            }`}
            />
            <h1 
                className={
                    `head-text ${
                        props.searchKeyword
                            ?'head-text-contracted'
                            :'head-text-expanded'
                    }`}
            >Name it</h1>
        </div>
    );
};

export default Header;