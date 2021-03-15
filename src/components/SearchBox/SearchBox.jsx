import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => props.handleInputChange(event.target.value)} 
                placeholder="Search keywords" 
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;