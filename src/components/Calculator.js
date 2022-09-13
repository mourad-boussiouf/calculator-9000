import BeautifulScreen from './BeautifulScreen.js';
import MagnificientEqualButton from './MagnificientEqualButton.js';

const Calculator = ({ children }) => {
    return (
        <div className="Calculator">
            { children }
        </div>
    )
};

export default Calculator;