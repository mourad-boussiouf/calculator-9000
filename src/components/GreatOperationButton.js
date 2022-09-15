import React from 'react'

const GreatOperationButton  = (props) => {

    const clickOperator = (e) => {
        props.setTheOperator(e.target.value)
    }

    const clickReset = () => {
        props.setTheOperator()
        props.resetExpression()
    }

    return (
        <div>
            <button value = '/'  onClick= {clickOperator}>÷</button>
            <button value = '*'  onClick= {clickOperator}>x</button>
            <button value = '+'  onClick= {clickOperator}>+</button>
            <button value = '-'  onClick= {clickOperator}>-</button>

            <button onClick={clickReset}>SUPPR</button>
        </div>
    )
};

export default GreatOperationButton;