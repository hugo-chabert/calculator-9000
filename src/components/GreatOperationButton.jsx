import React from 'react'
import "../css/calculator.css"

export default function GreatOperationButton({setValue, value, setResult}) {

    function changeValue(newValue){
        setValue(value + newValue)
    }

    function reset(){
        setValue("")
        setResult("")
    }

    return (
        <div class="operators">
            <button class="buttonsOperator" onClick={() => changeValue("+")}>+</button>
            <button class="buttonsOperator" onClick={() => changeValue("-")}>-</button>
            <button class="buttonsOperator" onClick={() => changeValue("*")}>x</button>
            <button class="buttonsOperator" onClick={() => changeValue("/")}>/</button>
            <button class="buttonRED" onClick={reset}>C</button>
        </div>
    )
}
