import React, {useEffect, useState} from 'react'
import AmazingNumberButton from './AmazingNumberButton'
import BeautifulScreen from './BeautifulScreen'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import "../css/calculator.css"
import ItSOverNineThousand from './ItSOverNineThousand'
import axios from 'axios'

export default function Calculator() {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")
    const [calcul, setCalcul] = useState("")
    const [table, setTable] = useState([])

    useEffect(() => {
        axios.get('http://localhost/runtrackreactjs/calculator-9000/src/get.php').then(response => response.data)
        .then((data) => {
            setTable(data)
        });
    })

    return (
        <div class='containerCalculator'>
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
            <div>
                <table class='table'>
                    <tr>
                        <th>Calcul</th>
                        <th>Resultat</th>
                    </tr>
                    {table.map((item) => (
                        <tr>
                            <td>{item.calcul}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}