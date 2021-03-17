import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = (props) => {
    const suggestedNames = props.suggestedNames;
    const suggestedNameItem = suggestedNames.map(suggestedName => {
            return <NameCard suggestedName={suggestedName} key={suggestedName}></NameCard>
        })
    return (
        <div className="result-container">{suggestedNameItem}</div>
    );
};

export default ResultContainer;