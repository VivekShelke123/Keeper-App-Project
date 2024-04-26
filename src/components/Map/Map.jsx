import React from 'react';
import "./Map.css";

const Map = (props) => {

    function handleDel(id){
        props.setArray(props.array.filter((data)=>{return data.id !== id}))
        
    }

    function handleMap(d, id1) {
        d.id = id1;
        const {id, title, task } = d;
        return (
            <>
                <div className='map-class' key={id1}>
                    <h3>{title}</h3>
                    <p>{task}</p>
                </div>
                <button className='button1' value={id1} onClick={()=>handleDel(id)}>Del</button>
            </>
        )
    }

    

    return (
        <div> 
            {props.array.map(handleMap)}
        </div>
    )
}

export default Map
