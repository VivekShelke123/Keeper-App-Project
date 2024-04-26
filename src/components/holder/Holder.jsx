import React, { useState } from 'react';
import Input from '../Input/Input';
import Map from '../Map/Map';
import "./Holder.css";

const Holder = () => {

    const [title, setTitile] = useState("");
    const [task, setTask] = useState("");
    const [arr, setArray] = useState([])

    function handleClick(event) {
        const obj = {
            id:'',
            title: title,
            task: task
        };
        setArray(prevalue => [...prevalue, obj]);
        console.log(arr);
        console.log("onClick Event")
    }

    return (
        <div>
            <div className='input'>
                <Input
                    type='text'
                    placeholder="writeanything"
                    value={title}
                    toChange={setTitile}
                />
                <Input
                    type='text'
                    placeholder="writeanything"
                    value={task}
                    toChange={setTask}
                />
                <button onClick={handleClick}>+</button>
            </div>
            
            <div className='map'>
                <Map
                    array = {arr}
                    setArray = {setArray}
                />
            </div>
        </div>
    )
}

export default Holder
