import React, {useEffect, useState} from 'react'
import AmazingNumberButton from './AmazingNumberButton'
import BeautifulScreen from './BeautifulScreen'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import "../css/calculator.css"
import ItSOverNineThousand from './ItSOverNineThousand'

export default function Calculator() {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")
    const [calcul, setCalcul] = useState("")

    return (
        <div class="calculator">
            <ItSOverNineThousand result={result}/>
            <BeautifulScreen value={value}/>
            <div class="buttonPlace">
                <div class="allSigns">
                <AmazingNumberButton value={value} setValue={setValue}/>
                <MagnificientEqualButton value={value} calcul={calcul} setValue={setValue} setResult={setResult} setCalcul={setCalcul}/>
                </div>
                <GreatOperationButton setValue={setValue} value={value} setResult={setResult}/>
            </div>
        </div>
    )
}