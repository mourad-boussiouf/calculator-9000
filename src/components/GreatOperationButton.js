import React from 'react'

const GreatOperationButton  = (props) => {

    const clickOperator = (e) => {
        props.setTheOperator(e.target.value)
    }

    return (
        <div>
            <button value = '/'  onClick= {clickOperator}>/</button>
            <button value = '*'  onClick= {clickOperator}>*</button>
            <button value = '+'  onClick= {clickOperator}>+</button>
            <button value = '-'  onClick= {clickOperator}>-</button>

            <button>SUPPR</button>
        </div>
    )
};

export default GreatOperationButton;