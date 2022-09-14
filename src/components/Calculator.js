import BeautifulScreen from './BeautifulScreen.js';
import MagnificientEqualButton from './MagnificientEqualButton.js';
import GreatOperationButton from "./GreatOperationButton";
import AmazingNumberButton from "./AmazingNumberButton";
import React, {useState} from "react";

const Calculator = () => {

    const [nombre1, setNombre1] = useState([])
    const [nombre2, setNombre2] = useState()

    const setFirstNumber = (Nombre) => {
            setNombre1([...nombre1,Nombre] );
    }

    return (
        <main>
        <div className="Calculator">
            <BeautifulScreen nombre1={nombre1} nombre2={nombre2}  />
            <GreatOperationButton />
            <AmazingNumberButton
                setFirstNumber= {setFirstNumber}
                setSecondNumber = {() => {setNombre2()}}
            />
            <MagnificientEqualButton />
        </div>
        </main>
    )
};

export default Calculator;