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
    const [reset, setReset] = useState(false)

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
        console.log(nombre1)
        if (nombre1.length > 0 || nombre1[0] === "0"){
            setOperator(operator)
            setCurrent(true)
        }
        if (!nombre1 || nombre1.length < 1) {
            setCurrent(false)
            alert('Loperateur ne peut etre utilisé que entre deux entiers positifs.')}
    }

    const resetExpression = () => {
        setReset(true)
        setNombre1([]);
        setNombre2([]);
        setOperator();
        setCurrent(false)
    }

    const calculTheResult = () => {

        let StringNombre1 = '';
        let StringNombre2 = '';

        for (let i = 0 ; i < nombre1.length ; i++ ){
                StringNombre1 += String(nombre1[i]);
        }

        for (let i = 0 ; i < nombre2.length ; i++ ){
            StringNombre2 += String(nombre2[i]);
        }
        let calculatedResult;
        switch (operator) {
            case '+' :
                calculatedResult = parseInt(StringNombre1) + parseInt(StringNombre2);
                return(calculatedResult);
                break;
            case '/' :
                calculatedResult = parseInt(StringNombre1) / parseInt(StringNombre2);
                return(calculatedResult);
                break;
            case '-' :
                calculatedResult = parseInt(StringNombre1) - parseInt(StringNombre2);
                return(calculatedResult);
                break;
            case '*' :
                calculatedResult = parseInt(StringNombre1) * parseInt(StringNombre2);
                return calculatedResult ;
                break;
        }
    }


    const setTheResult = () => {

        let finalResult = calculTheResult()
        let arrailleFinalResult = String(finalResult).split("").map((finalResult)=>{
            return (finalResult)
        })
        resetExpression()
        if (finalResult !== undefined) {
        setNombre1(arrailleFinalResult)
            setCurrent(true)
            setOperator(operator)

        }
        if (finalResult === undefined || isNaN(finalResult) === true){
            resetExpression()
            setCurrent(false)
        }

    }
        return (
        <main>
            <TheTitle />
            <div className="Calculator">
                <BeautifulScreen nombre1={nombre1} operator={operator} nombre2={nombre2}  />
                <GreatOperationButton
                    setTheOperator = {setTheOperator}
                    resetExpression = {resetExpression}
                />
                <AmazingNumberButton
                    setFirstNumber = {setFirstNumber}
                    setSecondNumber = {setSecondNumber}
                />
                <MagnificientEqualButton
                    setTheResult = {setTheResult}
                />
            </div>
        </main>
    )
};

export default Calculator;