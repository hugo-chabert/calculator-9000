import React from 'react'
import axios from 'axios'

export default function MagnificientEqualButton({value, calcul, setValue, setResult, setCalcul}) {

    function result(){
        try
        {
            const result = eval(value)
            const calcul = value
            setCalcul(calcul)
            setResult(result)
            setValue(result)
        }
        catch
        {
            setValue("Error")
        }
    }

    const save = async () => {
        try {
            const response = axios.post('http://localhost/runtrackreactjs/calculator-9000/src/post.php', {
                result: value,
                calcul: calcul
            });
            console.log(response.data);
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <div>
            <button class="buttonSave" onClick={save}>SAVE</button>
            <button class="buttonEqual" onClick={result}>=</button>
        </div>
    )
}