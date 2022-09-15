import React from 'react';

const MagnificientEgualButton = (props) => {

    const clickEqual = () => {
        props.setTheResult()
    }


    return(
        <div>
            <button onClick= {clickEqual}>
            <h2>=</h2>
            </button>
        </div>
    )
}

export default MagnificientEgualButton;