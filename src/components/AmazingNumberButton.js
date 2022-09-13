
const AmazingNumberButton = (props) => {
    const TableauChiffres = ["0","1","2","3","4","5","6","7","8","9"]
    return(
        <div>
            <button id="btn-zero" className="btn-zero">0</button>
            <button id="btn-un" className="btn-un">1</button>
            <button id="btn-deux" className="btn-two">2</button>
            <button id="btn-trois" className="btn-trois">3</button>
            <button id="btn-quatre" className="btn-quatre">4</button>
            <button id="btn-cinq" className="btn-cinq">5</button>
            <button id="btn-six" className="btn-six">6</button>
            <button id="btn-sept" className="btn-sept">7</button>
            <button id="btn-huit" className="btn-eight">8</button>
            <button id="btn-neuf" className="btn-nine">9</button>
            <button id="btn-point" className="btn-dot">.</button>
        </div>
    )
}

export default AmazingNumberButton;