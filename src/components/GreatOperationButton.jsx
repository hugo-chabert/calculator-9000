import React from 'react'
import "../css/calculator.css"

export default function GreatOperationButton({setValue, value}) {

    function changeValue(newValue){
        setValue(value + newValue)
    }

    function reset(){
        setValue("")
    }

    return (
        <div class="operators">
            <button class="buttons" onClick={() => changeValue("+")}>+</button>
            <button class="buttons" onClick={() => changeValue("-")}>-</button>
            <button class="buttons" onClick={() => changeValue("*")}>x</button>
            <button class="buttons" onClick={() => changeValue("/")}>/</button>
            <button class="buttons" onClick={reset}>C</button>
        </div>
    )
}
