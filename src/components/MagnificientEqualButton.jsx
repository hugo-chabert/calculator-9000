import React from 'react'

export default function MagnificientEqualButton({value, setValue}) {

    function result(){
        try
        {
            const result = eval(value)
            if(result > 9000){
                setValue("ItSOverNineThousand")
            }else{
                setValue(result)
            }
        }
        catch
        {
            setValue("Error")
        }
    }

    return (
        <div>
            <button class="buttons" onClick={result}>=</button>
        </div>
    )
}
