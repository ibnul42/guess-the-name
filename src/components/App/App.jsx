import React, { useState } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator');

function App() {
    const [searchKeyword, setSearchKeyword] = useState(false);
    const [suggestedNames, setSuggestedNames] = useState([]);
    const handleInputChange = (inputText) => {
        if(inputText){
            setSearchKeyword(true);
            setSuggestedNames(name(inputText));
        }
        else {
            setSearchKeyword(false);
            setSuggestedNames([]);
        }
    }
    return (
        <div>
            <Header searchKeyword={searchKeyword}></Header>
            <SearchBox handleInputChange={handleInputChange}></SearchBox>
            <ResultContainer suggestedNames={suggestedNames} key={suggestedNames}></ResultContainer>
        </div>
    )
}

export default App;