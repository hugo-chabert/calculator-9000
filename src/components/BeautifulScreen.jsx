import React from 'react'
import "../css/calculator.css"

export default function BeautifulScreen({value}) {
    return (
        <div class="screen">
            <div>{value}</div>
        </div>
    )
}
