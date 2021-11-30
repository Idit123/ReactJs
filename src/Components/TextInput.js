import React, { useState } from 'react'

export default function TextInput() {
    const [name, setName] = useState('')
    console.log(name);
    const setvalue = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <span>TextInput:</span>
            <br /><br />    
            <label>
                Name:<input type="text" onChange={setvalue} width="40%"/>
                <p>{name}</p>
            </label>
        </div>
    )
}
