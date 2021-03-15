import React, { useState } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

function App() {
    const [searchKeyword, setSearchKeyword] = useState(false);
    const handleInputChange = (inputText) => {
        if(inputText){
            setSearchKeyword(true);
        }
        else {
            setSearchKeyword(false);
        }
    }
    return (
        <div>
            <Header searchKeyword={searchKeyword}></Header>
            <SearchBox handleInputChange={handleInputChange}></SearchBox>
        </div>
    )
}

export default App;