import React from 'react'

const AmazingNumberButton = (props) => {

    const handleClick = (e) => {
        props.setFirstNumber(e.target.value)
        props.setSecondNumber(e.target.value)
    }

    const TableauChiffres = [];

    for (let i = 1 ; i < 10 ; i++ ){
        TableauChiffres.push(<button value = {i} key = {i}  onClick={handleClick}> {i}</button>);
    }
    TableauChiffres.push(<button value = {0} key = {0}  onClick={handleClick}> 0 </button>);
    return <div className="boutonsChiffres"> {TableauChiffres} </div>;
}

export default AmazingNumberButton;