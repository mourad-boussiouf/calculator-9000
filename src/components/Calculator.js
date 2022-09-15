import BeautifulScreen from './BeautifulScreen.js';
import MagnificientEqualButton from './MagnificientEqualButton.js';
import GreatOperationButton from "./GreatOperationButton";
import AmazingNumberButton from "./AmazingNumberButton";
import React, {useState} from "react";
import TheTitle from "./TheTitle";

const Calculator = () => {

    const [nombre1, setNombre1] = useState([])
    const [nombre2, setNombre2] = useState([])
    const [operator, setOperator] = useState()
    const [current, setCurrent] = useState(false)


    const setFirstNumber = (Nombre) => {
        if(current === false){
            setNombre1([...nombre1,Nombre] );

        }
    }

    const setSecondNumber = (Nombre) => {
        if(current === true){
            setNombre2([...nombre2,Nombre] );
        }
    }



    const setTheOperator = (operator) => {
        setCurrent(true)
        setOperator(operator);
    }

    console.log(operator);

        return (
        <main>
            <TheTitle />
        <div className="Calculator">
            <BeautifulScreen nombre1={nombre1} operator={operator} nombre2={nombre2}  />
            <GreatOperationButton
                setTheOperator = {setTheOperator}
            />
            <AmazingNumberButton
                setFirstNumber = {setFirstNumber}
                setSecondNumber = {setSecondNumber}
            />
            <MagnificientEqualButton />
        </div>
        </main>
    )
};

export default Calculator;