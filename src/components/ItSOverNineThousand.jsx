import React from 'react'

export default function ItSOverNineThousand({result}) {

    return (
        <div class="topText">{result > 9000 ? "It’s Over 9000 !!!" : ""}</div>
    )
}
