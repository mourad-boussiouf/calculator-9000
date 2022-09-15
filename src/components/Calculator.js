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
        setCurrent(true)
        setOperator(operator);
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

        if (nombre1.length === 0 || nombre1.length === 0){
            alert('ya pas de zero pour pas pouvoir faire la tete a toto lol')
        }
        for (let i = 0 ; i < nombre1.length ; i++ ){
                StringNombre1 += String(nombre1[i]);
        }

        for (let i = 0 ; i < nombre2.length ; i++ ){
            StringNombre2 += String(nombre2[i]);
        }

        switch (operator) {
            case '+' :
                console.log(parseInt(StringNombre1) + parseInt(StringNombre2));
                break;
            case '/' :
                console.log(parseInt(StringNombre1) + parseInt(StringNombre2));
                break;
            case '-' :
                console.log(parseInt(StringNombre1) + parseInt(StringNombre2));
                break;
            case '*' :
                console.log(parseInt(StringNombre1) + parseInt(StringNombre2));
                break;
        }

    }
    let assembledExpression = nombre1.length

    const setTheResult = () => {

        console.log(nombre2)
        console.log(operator)
        calculTheResult()
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