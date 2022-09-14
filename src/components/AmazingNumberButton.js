import React from 'react'

const AmazingNumberButton = (handle) => {


    const handleClick = (e) => {
        handle.setFirstNumber(e.target.value)
    }

    const TableauChiffres = [];


    for (let i = 1 ; i < 10 ; i++ ){
        TableauChiffres.push(<button value = {i} key = {i}  onClick={handleClick}> {i}</button>);
    }
    return TableauChiffres;
}

export default AmazingNumberButton;