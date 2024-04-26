import React from 'react'
import './Input.css'

const Input = (props) => {
    
    function handleChange(e){
        props.toChange(e.target.value);
    }

    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={handleChange} />
        </div>
    )
}

export default Input
