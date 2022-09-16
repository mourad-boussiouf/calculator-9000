import React from 'react';

const MagnificientEgualButton = (props) => {

    const clickEqual = () => {
        props.setTheResult()
    }


    return(
        <div className="buttonEgale">
            <button onClick= {clickEqual}>
            <h2>=</h2>
            </button>
        </div>
    )
}

export default MagnificientEgualButton;