import React, {useEffect, useState} from 'react'
import AmazingNumberButton from './AmazingNumberButton'
import BeautifulScreen from './BeautifulScreen'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import "../css/calculator.css"

export default function Calculator() {
    const [value, setValue] = useState("")

    return (
        <div class="calculator">
            <BeautifulScreen value={value}/>
            <div class="buttonPlace">
                <AmazingNumberButton value={value} setValue={setValue}/>
                <GreatOperationButton setValue={setValue} value={value}/>
            </div>
            <MagnificientEqualButton value={value} setValue={setValue}/>
        </div>
    )
}