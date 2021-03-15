import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="search-container">
            <input placeholder="Search keywords" className="search-input"/>
        </div>
    );
};

export default SearchBox;