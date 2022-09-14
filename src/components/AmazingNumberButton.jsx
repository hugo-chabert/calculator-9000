import React from 'react'
import "../css/calculator.css"

export default function AmazingNumberButton({value, setValue}) {

    function changeValue(newValue){
        setValue(value + newValue)
    }

    return (
        <div class="amazingButtons">
            <div>
                <button class="buttons" onClick={() => changeValue("1")}>1</button>
                <button class="buttons" onClick={() => changeValue("2")}>2</button>
                <button class="buttons" onClick={() => changeValue("3")}>3</button>
            </div>
            <div>
                <button class="buttons" onClick={() => changeValue("4")}>4</button>
                <button class="buttons" onClick={() => changeValue("5")}>5</button>
                <button class="buttons" onClick={() => changeValue("6")}>6</button>
            </div>
            <div>
                <button class="buttons" onClick={() => changeValue("7")}>7</button>
                <button class="buttons" onClick={() => changeValue("8")}>8</button>
                <button class="buttons" onClick={() => changeValue("9")}>9</button>
            </div>
            <button class="buttons" onClick={() => changeValue("0")}>0</button>
        </div>
    )
}
